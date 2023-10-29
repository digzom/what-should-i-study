import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import uuid from "react-native-uuid";
import {
  Button,
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
};

const mockedTasks: TaskType[] = [
  {
    topic: "Elixir",
    completedHours: 1,
    totalHours: 3,
    lastSession: "26/10/2023",
  },
  {
    topic: "Security",
    completedHours: 0,
    totalHours: 2,
    lastSession: "22/10/2023",
  },
  {
    topic: "Math",
    completedHours: 0,
    totalHours: 6,
    lastSession: "24/10/2023",
  },
  {
    topic: "Ingles",
    completedHours: 0,
    totalHours: 4,
    lastSession: "20/10/2023",
  },
];

const drawCompleted = () => {
  const uuid_unique = uuid.v4();
  return <Text key={uuid_unique}>(x)</Text>;
};

const drawIncompleted = () => {
  const uuid_unique = uuid.v4();
  return <Text key={uuid_unique}>( )</Text>;
};

export default function App() {
  const [task, setTask] = useState<String>("");
  const [tasks, setTasks] = useState<Array>();
  const [realTask, setRealTask] = useState<String>("");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Andamento</Text>
      <View style={styles.taskContainer}>
        {mockedTasks.map((task) => {
          return (
            <View style={styles.taskInsideConteiner}>
              <Text style={styles.task}>{task.topic}</Text>
              <View style={styles.learningStatusContainer}>
                <View style={styles.taskView}>
                  {Array(task.completedHours).fill(1).map(() =>
                    drawCompleted()
                  )}
                  {Array(task.totalHours - task.completedHours).fill(1).map(
                    () => drawIncompleted(),
                  )}
                </View>
              </View>
            </View>
          );
        })}
      </View>
      <View style={styles.inputButtonContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableHighlight
          onPress={() => setRealTask(task)}
        >
          <Text style={styles.button}>Add</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 36,
    paddingHorizontal: 12,
    paddingTop: 40,
  },
  learningStatusContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 10,
  },
  taskInsideConteiner: {
    backgroundColor: "#32CFF0",
    marginVertical: 20,
    borderRadius: 10,
  },
  inputButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    flex: 2,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
  },
  button: {
    paddingVertical: 10,
    minWidth: 100,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#AAA",
    borderRadius: 20,
  },
  taskContainer: {
    border: "solid",
    borderWidth: 1,
    display: "flex",
    flexGrow: 1,
    marginBottom: 15,
    borderRadius: 10,
    padding: 20,
  },
  task: {
    fontSize: 25,
    letterSpacing: 3,
    textAlign: "center",
  },
  title: {
    fontSize: 35,
    paddingVertical: 10,
  },
  taskView: {
    display: "flex",
    flexDirection: "row",
    columnGap: 10
  },
});
