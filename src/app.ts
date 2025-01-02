import fs from "fs";
import { getAllTasks } from "./wrikeService";

const mapTask = (task: any) => ({
  id: task.id,
  name: task.title,
  assignees: task.responsibles,
  status: task.status,
  collections: task.parentIds,
  created_at: task.createdDate,
  updated_at: task.updatedDate,
  ticket_url: task.permalink,
});

const saveTasksToFile = (tasks: any[]) => {
  const filePath = "./tasks.json";
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
  console.log(`Tasks saved to ${filePath}`);
};

const main = async () => {
  try {
    const tasks = await getAllTasks();
    const mappedTasks = tasks.map(mapTask);
    saveTasksToFile(mappedTasks);
  } catch (error) {
    console.error("Error in main:", error);
  }
};

main();
