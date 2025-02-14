"use client";

import Image from "next/image";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import html2canvas from "html2canvas";
import type { TicketFormData } from "../types/ticket";
import { ProgressBar } from "./progress-bar";

interface TicketProps {
  data: TicketFormData;
  onReset: () => void;
  quantity: number;
}

export function Ticket({ data, onReset, quantity }: TicketProps) {
  const downloadTicket = async () => {
    const ticketElement = document.getElementById("ticket-card");
    if (ticketElement) {
      const canvas = await html2canvas(ticketElement, {
        backgroundColor: "#051320",
        scale: 2,
      });
      const dataUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = "techember-fest-ticket.png";
      link.href = dataUrl;
      link.click();
    }
  };

  return (
    <div className="min-h-screen max-w-xl mx-auto relative items-center justify-center bg-[#051320] p-12 rounded-2xl border border-[#24A0B5]">
      <div className=" w-full flex flex-col items-center justify-center">
        <div className="mb-8 w-full">
          <div className="text-center flex justify-between">
            <h1 className="text-4xl font-bold mb-2">Ready</h1>
            <p className="text-xl text-muted-foreground">Step 3/3</p>
          </div>
          <ProgressBar currentStep={3} totalSteps={3} />
        </div>

        <div className="text-center my-8">
          <h1 className="text-4xl font-bold mb-2">Your Ticket is Booked!</h1>
          <p className="text-xl text-muted-foreground">
            Check your email for entry or you can download below
          </p>
        </div>
        <div className="w-fit  h-full relative overflow-hidden">
          <div
            id="ticket-card"
            className="relative border-b-0 z-30 border-[#24A0B5] p-10 border-2 bg-[#051320] text-white"
          >
            <div className="w-8 h-8 absolute rounded-full bg-[#051320] border-l-2  border-b-2 border-[#24A0B5] -top-4 -right-4"></div>
            <div className="w-8 h-8 absolute rounded-full bg-[#051320] border-l-2  border-b-2 border-[#24A0B5] -top-4 -left-4"></div>
            <div className="w-8 h-8 absolute  z-50 rounded-full bg-[#051320] border-2  border-l-0 border-[#24A0B5] --4 -bottom-4 -right-4"></div>
            <div className="w-8 h-8 absolute  z-50 rounded-full bg-[#051320] border-2  border-l-0 border-[#24A0B5] --4 -bottom-4 -left-4"></div>

            <div className="space-y-6 border border-[#24A0B5] p-5  rounded-xl">
              <h1 className="text-2xl font-semibold text-white">
                Techember Fest &apos;25
              </h1>

              <div className="space-y-1 text-sm text-gray-400">
                <p className="flex items-center gap-2">
                  <span className="text-[#ff2d55]">📍</span> 04 Rumens road,
                  Ikoyi, Lagos
                </p>
                <p className="flex items-center gap-2">
                  <span>📅</span> March 15, 2025 | 7:00 PM
                </p>
              </div>

              <div className="flex justify-center my-6">
                <div className="relative w-32 h-32 rounded-xl overflow-hidden border-2 border-[#00ffff] bg-[#00ffff]/10">
                  <Image
                    src={data.avatarUrl}
                    alt="Profile"
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="gap-x-4 gap-y-6 grid grid-cols-1 md:grid-cols-2 bg-[#08343C] p-4 rounded-2xl border border-[#133D44] text-sm">
                <div className="space-y-1 border-b md:border-r border-[#133D44] p-2">
                  <p className="text-gray-500">Enter your name</p>
                  <p className="font-medium text-gray-300">{data.fullName}</p>
                </div>
                <div className="space-y-1 border-b border-[#133D44] p-2">
                  <p className="text-gray-500">Enter your email *</p>
                  <p className="font-normal text-gray-300">{data.email}</p>
                </div>
                <div className="space-y-1 border-b md:border-r border-[#133D44] p-2">
                  <p className="text-gray-500">Ticket Type:</p>
                  <p className="font-medium text-gray-300">{data.ticketType}</p>
                </div>
                <div className="space-y-1 border-b border-[#133D44] p-2">
                  <p className="text-gray-500">Ticket for:</p>
                  <p className="font-medium text-gray-300">
                    {quantity} 
                  </p>
                </div>
                <div className="space-y-2 col-span-1 md:col-span-2">
                  <p className="text-sm text-gray-500">Special requests?</p>
                  <div className="rounded-lg p-4 min-h-[80px] text-sm text-gray-300 bg-[#0A2E36]">
                    {data.specialRequest}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-1 left-0 bottom-0 absolute bg-[#051320]  w-full">
              {Array.from({ length: 40 }, (_, i) => (
                <div
                  key={i}
                  className="w-[8px] relative h-[2px] border-[#24A0B5] border text-white rounded-full"
                ></div>
              ))}
            </div>
          </div>
          <div className="w-full overflow-hidden">
            <div className="w-full border-[#24A0B5] border-t-0 flex items-center justify-center  relative h-24 p-10 border-2 bg-[#051320] text-white rounded-2xl ">
              <div className="w-[95%] h-20 relative">
                <Image alt="barcode" src="/Bar Code.svg" fill />
              </div>
              <div className="w-8 h-8 absolute  z-50 rounded-full bg-[#051320] border-2  border-l-0 border-[#24A0B5] --4 -bottom-4 -right-4"></div>
              <div className="w-8 h-8 absolute  z-50 rounded-full bg-[#051320] border-2  border-l-0 border-[#24A0B5] --4 -bottom-4 -left-4"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-between gap-4 mt-8">
        {" "}
        <Button
          onClick={downloadTicket}
          className="  bg-[#00ffff] items-center hover:bg-[#00ffff]/90 text-black w-[290px]"
        >
          <Download className="w-4 h-4 mr-2" />
          Download Ticket
        </Button>
        <Button variant="outline" onClick={onReset} className="w-[290px]">
          Book Another Ticket
        </Button>
      </div>
    </div>
  );
}
