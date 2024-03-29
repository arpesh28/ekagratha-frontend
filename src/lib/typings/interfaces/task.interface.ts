export interface Task {
  name: string;
  priority: "high" | "medium" | "low";
  status: 0 | 1;
}

export interface TaskCategory {
  name: string;
}

export interface TaskListViewProps {
  title: string;
  subTitle: string;
}
