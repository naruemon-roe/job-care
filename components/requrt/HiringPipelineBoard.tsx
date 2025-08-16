"use client";

import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useState } from "react";
import { Pin } from "lucide-react";

type Candidate = {
  id: string;
  name: string;
  pinned?: boolean;
};

type Column = {
  id: string;
  title: string;
  items: Candidate[];
};

export default function HiringPipelineBoard() {
  const [columns, setColumns] = useState<Record<string, Column>>({
    received: {
      id: "received",
      title: "Received",
      items: [
        { id: "1", name: "คุณสุรีย์", pinned: true },
        { id: "2", name: "คุณมนตรี", pinned: false },
        { id: "3", name: "คุณดวงใจ", pinned: true },
      ],
    },
    screening: {
      id: "screening",
      title: "Screening",
      items: [{ id: "4", name: "คุณมะลิ" }],
    },
    interview: { id: "interview", title: "Interview", items: [] },
    offer: { id: "offer", title: "Offer", items: [] },
  });

  // handle drag
  const onDragEnd = (result: any) => {
    if (!result.destination) return;

    const { source, destination } = result;

    // Move inside same column
    if (source.droppableId === destination.droppableId) {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);

      setColumns({
        ...columns,
        [column.id]: { ...column, items: copiedItems },
      });
    } else {
      // move to another column
      const sourceCol = columns[source.droppableId];
      const destCol = columns[destination.droppableId];
      const srcItems = [...sourceCol.items];
      const destItems = [...destCol.items];
      const [removed] = srcItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);

      setColumns({
        ...columns,
        [sourceCol.id]: { ...sourceCol, items: srcItems },
        [destCol.id]: { ...destCol, items: destItems },
      });
    }
  };

  return (
    <div className="bg-[#1c0037] rounded-xl p-4 text-white">
      <h2 className="font-semibold text-lg mb-4">🟦 Kanban Hiring Pipeline</h2>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex flex-col gap-4">
          {Object.entries(columns).map(([columnId, column]) => {
            // กำหนดสีเฉพาะตาม column id
            const colorMap: Record<string, string> = {
              received: "#3B82F6", // blue
              screening: "#8B5CF6", // violet
              interview: "#FBBF24", // yellow
              offer: "#10B981", // green
            };
            const leftColor = colorMap[columnId] ?? "#8B5CF6";

            return (
              <Droppable key={columnId} droppableId={columnId}>
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="relative rounded-md p-3 space-y-2 bg-white/10">
                    {/* LEFT COLOR STRIP */}
                    <span
                      className="absolute left-0 top-0 bottom-0 rounded-l-md"
                      style={{ width: "6px", backgroundColor: leftColor }}
                    />

                    <div className="text-sm font-semibold mb-1 pl-2">
                      {column.title}
                    </div>

                    {column.items.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="bg-white/20 p-2 rounded flex items-center justify-between text-sm cursor-pointer">
                            <span>{item.name}</span>
                            {item.pinned && (
                              <Pin size={14} className="text-yellow-300" />
                            )}
                          </div>
                        )}
                      </Draggable>
                    ))}

                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            );
          })}
        </div>
      </DragDropContext>
    </div>
  );
}
