import Sidebar from "@/app/components/Sidebar";
const data = [
  {
    id: 1,
    title: "Parent 1",
    children: [
      {
        id: 11,
        title: "Child 1.1",
        children: [
          {
            id: 111,
            title: "Grandchild 1.1.1",
            children: [
              { id: 1111, title: "Great Grandchild 1.1.1.1" },
              { id: 1112, title: "Great Grandchild 1.1.1.2" },
            ],
          },
          {
            id: 112,
            title: "Grandchild 1.1.2",
            children: [
              { id: 1121, title: "Great Grandchild 1.1.2.1" },
              { id: 1122, title: "Great Grandchild 1.1.2.2" },
            ],
          },
        ],
      },
      // Add more child items as needed
    ],
  },
  {
    id: 2,
    title: "Parent 2",
    children: [
      {
        id: 21,
        title: "Child 2.1",
        children: [
          {
            id: 211,
            title: "Grandchild 2.1.1",
            children: [
              { id: 2111, title: "Great Grandchild 2.1.1.1" },
              { id: 2112, title: "Great Grandchild 2.1.1.2" },
            ],
          },
          {
            id: 212,
            title: "Grandchild 2.1.2",
            children: [
              { id: 2121, title: "Great Grandchild 2.1.2.1" },
              { id: 2122, title: "Great Grandchild 2.1.2.2" },
            ],
          },
        ],
      },
      // Add more child items as needed
    ],
  },
  {
    id: 3,
    title: "Parent 3",
    children: [
      {
        id: 31,
        title: "Child 3.1",
        children: [
          {
            id: 311,
            title: "Grandchild 3.1.1",
            children: [
              { id: 3111, title: "Great Grandchild 3.1.1.1" },
              { id: 3112, title: "Great Grandchild 3.1.1.2" },
            ],
          },
          {
            id: 312,
            title: "Grandchild 3.1.2",
            children: [
              { id: 3121, title: "Great Grandchild 3.1.2.1" },
              { id: 3122, title: "Great Grandchild 3.1.2.2" },
            ],
          },
        ],
      },
      // Add more child items as needed
    ],
  },
];

export default function Home() {
  return (
    <div className="flex">
      <Sidebar data={data} />
      <div className="flex-1 bg-gray-200">{/* Your page content */}</div>
    </div>
  );
}
