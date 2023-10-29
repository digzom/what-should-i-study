import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import uuid from "react-native-uuid";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";

type TaskType = {
  topic: String;
  completedHours: Number;
  totalHours: Number;
  lastSession: String;
  remainingHours: Number;
};

const mockedTasks: TaskType[] = [
  {
    topic: "Elixir",
    completedHours: 1,
    totalHours: 3,
    remainingHours: 2,
    lastSession: "26/10/2023",
  },
  {
    topic: "Security",
    completedHours: 0,
    totalHours: 2,
    remainingHours: 2,
    lastSession: "22/10/2023",
  },
  {
    topic: "Math",
    completedHours: 0,
    totalHours: 5,
    remainingHours: 5,
    lastSession: "24/10/2023",
  },
  {
    topic: "Ingles",
    completedHours: 1,
    totalHours: 4,
    remainingHours: 3,
    lastSession: "20/10/2023",
  },
];

const drawCompleted = () => {
  const uuid_unique = uuid.v4().toString();
  return <Text key={uuid_unique}>(x)</Text>;
};

const drawIncompleted = () => {
  const uuid_unique = uuid.v4().toString();
  return <Text key={uuid_unique}>( )</Text>;
};

export default function App() {
  return (
    <View className="flex-1 flex-end mb-12 px-5 pt-12">
      <StatusBar style="auto" />
      <Text className="text-4xl py-4">Andamento</Text>
      <View className="flex flex-grow mb-10 rounded-xl justify-evenly">
        {mockedTasks.map((task) => {
          return (
            <View className="flex bg-blue-300 rounded-md border border-blue-400" >
              <Text className="text-2xl tracking-wide text-center">
                {task.topic}
              </Text>
              <View className="flex flex-row justify-center py-3">
                <View className="flex flex-row gap-x-3">
                  {Array(task.completedHours).fill(1).map(() =>
                    drawCompleted()
                  )}
                  {Array(task.remainingHours).fill(1).map(
                    () => drawIncompleted(),
                  )}
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}
