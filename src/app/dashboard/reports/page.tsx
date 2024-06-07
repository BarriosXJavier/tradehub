"use client";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ResponsiveLine } from "@nivo/line";
import { ResponsiveBar } from "@nivo/bar";
import { ResponsivePie } from "@nivo/pie";
import Image from "next/image";
import { JSX, SVGProps } from "react";

const ReportsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
        <h1 className="text-lg font-semibold md:text-xl">Reports</h1>
      </header>
      <main className="flex-1 p-4 md:p-6 grid gap-6">
        <section>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold md:text-xl">Sales Metrics</h2>
            <div className="flex items-center gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="icon">
                    <CalendarClockIcon className="h-4 w-4" />
                    <span className="sr-only">Select date range</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="end">
                  <Calendar initialFocus mode="range" numberOfMonths={2} />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-4">
            <Card>
              <CardHeader>
                <CardDescription>Total Revenue</CardDescription>
                <CardTitle>$123,456.78</CardTitle>
              </CardHeader>
              <CardContent>
                <LineChart className="aspect-[4/3]" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardDescription>Gross Profit</CardDescription>
                <CardTitle>$45,678.90</CardTitle>
              </CardHeader>
              <CardContent>
                <BarChart className="aspect-[4/3]" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardDescription>Conversion Rate</CardDescription>
                <CardTitle>12.34%</CardTitle>
              </CardHeader>
              <CardContent>
                <LineChart className="aspect-[4/3]" />
              </CardContent>
            </Card>
          </div>
        </section>
        <section>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold md:text-xl">
              Top Selling Products
            </h2>
            <Link
              href="#"
              className="text-sm font-medium text-primary hover:underline"
              prefetch={false}
            >
              View All
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            <Card>
              <CardHeader>
                <Image
                  src="/placeholder.svg"
                  alt="Product Image"
                  width={100}
                  height={100}
                  className="rounded-lg"
                />
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-semibold">Product Name</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Product Description
                </p>
                <div className="flex items-center justify-between mt-2">
                  <span className="font-semibold">$19.99</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    123 sold
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Image
                  src="/placeholder.svg"
                  alt="Product Image"
                  width={100}
                  height={100}
                  className="rounded-lg"
                />
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-semibold">Product Name</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Product Description
                </p>
                <div className="flex items-center justify-between mt-2">
                  <span className="font-semibold">$29.99</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    87 sold
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Image
                  src="/placeholder.svg"
                  alt="Product Image"
                  width={100}
                  height={100}
                  className="rounded-lg"
                />
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-semibold">Product Name</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Product Description
                </p>
                <div className="flex items-center justify-between mt-2">
                  <span className="font-semibold">$14.99</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    65 sold
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        <section>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold md:text-xl">
              Customer Analytics
            </h2>
            <div className="flex items-center gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="icon">
                    <FilterIcon className="h-4 w-4" />
                    <span className="sr-only">Filter customers</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="end">
                  <div className="grid gap-2 p-4">
                    <h3 className="text-sm font-semibold">Filter by:</h3>
                    <div className="grid gap-1">
                      <Label className="flex items-center gap-2 font-normal">
                        <Checkbox />
                        New Customers
                      </Label>
                      <Label className="flex items-center gap-2 font-normal">
                        <Checkbox />
                        Returning Customers
                      </Label>
                      <Label className="flex items-center gap-2 font-normal">
                        <Checkbox />
                        VIP Customers
                      </Label>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            <Card>
              <CardHeader>
                <CardDescription>New Customers</CardDescription>
                <CardTitle>1,234</CardTitle>
              </CardHeader>
              <CardContent>
                <LineChart className="aspect-[4/3]" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardDescription>Returning Customers</CardDescription>
                <CardTitle>4,567</CardTitle>
              </CardHeader>
              <CardContent>
                <BarChart className="aspect-[4/3]" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardDescription>VIP Customers</CardDescription>
                <CardTitle>789</CardTitle>
              </CardHeader>
              <CardContent>
                <PieChart className="aspect-square" />
              </CardContent>
            </Card>
          </div>
        </section>
        <section>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold md:text-xl">Revenue Trends</h2>
            <div className="flex items-center gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="icon">
                    <FilterIcon className="h-4 w-4" />
                    <span className="sr-only">Filter revenue data</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="end">
                  <div className="grid gap-2 p-4">
                    <h3 className="text-sm font-semibold">Filter by:</h3>
                    <div className="grid gap-1">
                      <Label className="flex items-center gap-2 font-normal">
                        <Checkbox />
                        Monthly
                      </Label>
                      <Label className="flex items-center gap-2 font-normal">
                        <Checkbox />
                        Quarterly
                      </Label>
                      <Label className="flex items-center gap-2 font-normal">
                        <Checkbox />
                        Yearly
                      </Label>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="mt-4">
            <Card>
              <CardContent>
                <LineChart className="aspect-[16/9]" />
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}

function BarChart(props: any) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", count: 111 },
          { name: "Feb", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Apr", count: 150 },
          { name: "May", count: 119 },
          { name: "Jun", count: 72 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  );
}

function CalendarClockIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
      <path d="M16 2v4" />
      <path d="M8 2v4" />
      <path d="M3 10h5" />
      <path d="M17.5 17.5 16 16.3V14" />
      <circle cx="16" cy="16" r="6" />
    </svg>
  );
}

function FilterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function LineChart(props: any) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}

function PieChart(props: any) {
  return (
    <div {...props}>
      <ResponsivePie
        data={[
          { id: "Jan", value: 111 },
          { id: "Feb", value: 157 },
          { id: "Mar", value: 129 },
          { id: "Apr", value: 150 },
          { id: "May", value: 119 },
          { id: "Jun", value: 72 },
        ]}
        sortByValue
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        cornerRadius={0}
        padAngle={0}
        borderWidth={1}
        borderColor={"#ffffff"}
        enableArcLinkLabels={false}
        arcLabel={(d) => `${d.id}`}
        arcLabelsTextColor={"#ffffff"}
        arcLabelsRadiusOffset={0.65}
        colors={["#2563eb"]}
        theme={{
          labels: {
            text: {
              fontSize: "18px",
            },
          },
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}

export default ReportsPage;