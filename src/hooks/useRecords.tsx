import { useEffect, useState } from "react";
import { useUpdate } from "./useUpdate";
import day from "dayjs";

export type RecordItem = {
  tagIds: number[];
  note: string;
  category: "+" | "-";
  amount: number;
  createdAt: string; // ISO 8601
};
type newRecordItem = Omit<RecordItem, "createdAt">;

const a = [
  {
    tagIds: [10],
    note: "",
    category: "-",
    amount: 25,
    createdAt: "2021-07-07T08:24:11.139Z",
  },
  { tagIds: [6], note: "", category: "-", amount: 18, createdAt: "2021-07-07T08:24:16.891Z" },
  {
    tagIds: [8],
    note: "",
    category: "+",
    amount: 55,
    createdAt: "2021-07-07T08:24:20.593Z",
  },
  { tagIds: [3], note: "", category: "-", amount: 25, createdAt: "2021-07-07T08:24:25.104Z" },
  {
    tagIds: [4],
    note: "",
    category: "+",
    amount: 28,
    createdAt: "2021-07-07T08:24:28.481Z",
  },
];
const firstRecords = JSON.stringify(a);
const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);
  const localRecords = JSON.parse(window.localStorage.getItem("records") || "[]");
  useEffect(() => {
    if (localRecords.length !== 0) {
      setRecords(localRecords);
    } else {
      setRecords(JSON.parse(firstRecords));
    }
  }, []);

  useUpdate(() => {
    window.localStorage.setItem("records", JSON.stringify(records));
  }, [records]);

  const addRecords = (newRecord: newRecordItem) => {
    if (newRecord.tagIds.length === 0) {
      alert("请输入标签！");
      return false;
    }
    if (newRecord.amount <= 0) {
      alert("请输入金额！");
      return false;
    }
    if (newRecord.note === "") {
      alert("请输入备注！");
      return false;
    }
    console.log('执行了');
    
    const record = { ...newRecord, createdAt: new Date().toISOString() };
    setRecords([...records, record]);
    return true;
  };
  // 支出的标签
  const expenses = records.filter(item => item.category === "-");
  // 收入的标签
  const income = records.filter(item => item.category === "+");
  // 计算总支出、总收入
  const computeAmount = (category: "+" | "-"): number => {
    if (category === "-") {
      return expenses
        .map(item => item.amount)
        .reduce((perNumber, sum) => {
          return (perNumber += sum);
        }, 0);
    } else {
      return income
        .map(item => item.amount)
        .reduce((perNumber, sum) => {
          return (perNumber += sum);
        }, 0);
    }
  };
  // 计算今日支出
  const dayExpenses = (category: string) => {
    const newList = [...records]
      .filter(r => r.category === category)
      .sort((a, b) => day(b.createdAt).valueOf() - day(a.createdAt).valueOf());
    if (newList.length === 0) {
      return [];
    }
    const result: RecordItem[] = [];
    for (let i = 0; i < newList.length; i++) {
      const current = newList[i];
      const oldtime = current.createdAt;
      const newtime = new Date().toISOString();
      if (day(oldtime).isSame(newtime, "day")) {
        result.push(current);
      }
    }
    return result
      .map(t => t.amount)
      .reduce((perNumber, sum) => {
        return (perNumber += sum);
      }, 0);
  };

  return { records, addRecords, computeAmount, dayExpenses, expenses, income };
};

export { useRecords };
