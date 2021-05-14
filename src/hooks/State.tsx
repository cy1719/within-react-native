import { List } from "immutable";
import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import Project from "../models/Project";
import Todo from "../models/Todo";

export type SageSettings = {
  onboarding: boolean;
  user: FirebaseAuthTypes.User | null;
  theme: boolean;
  maxProjects: number;
  maxTasks: number;
  defaultInterval: number;
};

export type GlobalState = {
  projects: List<Project>;
  todos: List<Todo>;
  settings: SageSettings;
  selectedTodo: string;
  running: boolean;
};

export const SAGE_DEFAULT_SETTINGS: SageSettings = {
  onboarding: false,
  user: null,
  theme: true,
  maxProjects: 4,
  maxTasks: 3,
  defaultInterval: 25 * 60,
};

export const DEFAULT_GLOBAL_STATE: GlobalState = {
  projects: List<Project>(),
  todos: List<Todo>(),
  settings: SAGE_DEFAULT_SETTINGS,
  selectedTodo: "",
  running: false,
};
