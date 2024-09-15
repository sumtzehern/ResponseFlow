import React from "react";
import {
  Badge,
  Button,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui";
import { TooltipProvider } from "@/components/ui/tooltip";
import Sidebar from "@/components/sidebar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Chat from "@/components/chat";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "1":
      return "bg-green-500"; // Low priority
    case "2":
      return "bg-yellow-500"; // Medium priority
    case "3":
      return "bg-orange-500"; // High priority
    case "4":
      return "bg-red-500"; // Critical priority
    default:
      return "bg-gray-300"; // Default color
  }
};

export function Dashboard() {
  const callDetails = [
    {
      who: "John Doe",
      where: "123 Main St, Springfield",
      what: "Fire in a residential area",
      when: "Sept 14, 2024 - 12:30 PM",
      priority: "4",
    },
    {
      who: "Jane Smith",
      where: "456 Oak St, Metropolis",
      what: "Medical emergency",
      when: "Sept 14, 2024 - 1:00 PM",
      priority: "2",
    },
    {
      who: "David Johnson",
      where: "789 Pine St, Gotham",
      what: "Burglary in progress",
      when: "Sept 14, 2024 - 2:00 PM",
      priority: "3",
    },
    {
      who: "Emily Davis",
      where: "321 Cedar St, Star City",
      what: "Traffic accident with injuries",
      when: "Sept 14, 2024 - 3:15 PM",
      priority: "4",
    },
    {
      who: "Michael Brown",
      where: "654 Elm St, Central City",
      what: "Gas leak reported",
      when: "Sept 14, 2024 - 4:45 PM",
      priority: "1",
    },
  ];

  return (
    <TooltipProvider>
      <div className="grid h-screen w-full pl-[56px]">
        <Sidebar />
        <div className="flex flex-col w-full">
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel className="flex justify-center items-start">
              <div className="w-[80%] flex flex-col space-y-4"> {/* Vertical stacking with spacing */}
                {callDetails.map((details, index) => {
                  const [date, time] = details.when.split(" - "); // Split date and time
                  return (
                    <Card key={index} className="w-full h-40 relative overflow-hidden">
                      <CardHeader className="relative">
                        <div className="flex items-center">
                          <CardTitle>{details.who}</CardTitle>
                          <span
                            className={`inline-block ml-2 text-white text-sm font-bold rounded-full h-6 w-6 flex items-center justify-center ${getPriorityColor(
                              details.priority
                            )}`}
                          >
                            {details.priority}
                          </span>
                        </div>
                        {/* Date and time with right-justified time */}
                        <div className="absolute top-0 right-0 text-sm text-gray-500 p-2 flex flex-col items-end">
                          <div>{date}</div>
                          <div className="text-right">{time}</div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-1">{details.what}</div>
                        <div className="mb-1">{details.where}</div>
                      </CardContent>
                      <CardFooter className="absolute bottom-2 right-2">
                        <Button variant="outline" size="sm">
                          Respond
                        </Button>
                      </CardFooter>
                    </Card>
                  );
                })}
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel className="flex justify-center items-center">
              <div className="w-[60%]">
                <Chat />
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </div>
    </TooltipProvider>
  );
}
