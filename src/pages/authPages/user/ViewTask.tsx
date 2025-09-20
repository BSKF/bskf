import React, { useState, useMemo, useEffect } from "react";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/slices/store/store";
import { useDispatch } from "react-redux";
import { getTaskByUserId } from "@/slices/tasks";

const ViewTask: React.FC = () => {
    const { currentUser } = useSelector((state: RootState) => state.auth);
    const { tasks } = useSelector((state: RootState) => state.tasks);
    const dispatch = useDispatch<AppDispatch>();


    useEffect(() => {
        const fetchTask = async () => {
          await dispatch(getTaskByUserId(currentUser.user_id));
        };
        fetchTask();
      }, []);

  // All tasks assigned to the current user
  const myTasks = useMemo(
    () => tasks.filter((t) => t.assigned_to === currentUser.user_id),
    [tasks, currentUser]
  );

  const [selected, setSelected] = useState(null);

  const getDaysLeft = (deadline: string) => {
    const d1 = new Date(deadline).getTime();
    const d2 = new Date().getTime();
    const diff = Math.ceil((d1 - d2) / (1000 * 60 * 60 * 24));
    return diff;
  };

  return (
    <div className="flex h-screen p-6 gap-6 bg-gray-50">
      {/* Left panel - Task list */}
      <div className="w-1/3 bg-white rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold mb-3">My Tasks</h2>
        <div className="max-h-[80vh] overflow-y-auto divide-y">
          {myTasks.length ? (
            myTasks.map(task => (
              <div
                key={task.task_id}
                onClick={() => setSelected(task)}
                className={`cursor-pointer p-3 hover:bg-gray-100 ${
                  selected?.id === task.task_id ? "bg-blue-50" : ""
                }`}
              >
                <p className="font-medium truncate">{task.title}</p>
                <p className="text-sm text-gray-600">
                  By @{task.assigned_by_user.username}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 p-4 text-center">No tasks assigned</p>
          )}
        </div>
      </div>

      {/* Right panel - Task details */}
      <div className="flex-1 bg-white rounded-lg shadow p-6">
        {selected ? (
          <div>
            <h2 className="text-2xl font-bold mb-2">{selected.title}</h2>
            <p className="text-gray-700 mb-4 whitespace-pre-line">
              {selected.content}
            </p>
            <div className="mb-2">
              <span className="font-semibold">Deadline: </span>
              {new Date(selected.deadline).toLocaleString()}
            </div>
            <div className="mb-4">
              <span className="font-semibold">Assigned by: </span>
              {selected.assigned_by_user.firstname} {selected.assigned_by_user.middlename} {selected.assigned_by_user.lastname}
            </div>

            {/* Deadline warning */}
            {(() => {
              const daysLeft = getDaysLeft(selected.deadline);
              if (daysLeft >= 0 && daysLeft <= 7) {
                return (
                  <div className="mt-4 p-3 bg-yellow-100 text-yellow-800 rounded">
                    ⏰ Deadline is close: {daysLeft} day
                    {daysLeft !== 1 && "s"} left
                  </div>
                );
              }
              return null;
            })()}
          </div>
        ) : (
          <div className="h-full flex items-center justify-center text-gray-500 text-xl">
            Select a task to view in details
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewTask;
