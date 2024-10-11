"use client";
import { parseDate } from "@internationalized/date";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { DatePicker } from "@nextui-org/date-picker";
import { Divider } from "@nextui-org/divider";
import { Input } from "@nextui-org/input";
import { Camera } from "lucide-react";
import { useState } from "react";
import { Select, SelectItem } from "@nextui-org/select";

import IconComponent from "./IconComponent";
import CustomComponent from "./components/CustomComponent";

import { subtitle, title } from "@/components/primitives";

export default function Home() {
  const iconName = "search";
  const [states] = useState([
    { key: "gujarat", label: "Gujarat" },
    { key: "maharashtra", label: "Maharashtra" },
    { key: "rajasthan", label: "Rajasthan" },
  ]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: parseDate("2024-12-26"),
    state: "",
    custom: {
      type: "",
      search: "",
    },
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleDateChange = (value: any) => {
    console.log(`${value.year}-${value.month}-${value.day}`);
    setFormData((prevFormData) => ({
      ...prevFormData,
      dob: parseDate(`${value.year}-${value.month}-${value.day}`),
    }));
  };

  const handleStateChange = (event: any) => {
    console.log(event.target.value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      state: event.target.value,
    }));
  };

  const handleCustomChange = (value: { type: string; search: string }) => {
    console.log(value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      custom: value,
    }));
  };

  const handleSubmit = () => {
    console.log(formData);
    alert(JSON.stringify(formData));
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Make&nbsp;</span>
        <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
        <br />
        <span className={title()}>
          websites regardless of your design experience.
        </span>
        <div className={subtitle({ class: "mt-4" })}>
          Beautiful, fast and modern React UI library.
        </div>
      </div>

      <div className="flex gap-4">
        <Camera color="red" size={48} />
        <IconComponent color="green" name={iconName} size={48} />
      </div>

      <Card className="max-w-[600px]">
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="text-md">NextUI</p>
            <p className="text-small text-default-500">nextui.org</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col w-full gap-4">
              <Input
                label="Name"
                name="name"
                placeholder="Enter your name"
                type="text"
                value={formData.name}
                onChange={handleChange}
              />
              <Input
                label="Email"
                name="email"
                placeholder="Enter your email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
              <DatePicker
                className="max-w"
                label="Birth date"
                name="dob"
                value={formData.dob}
                onChange={handleDateChange}
              />
              <Select
                className="max-w-xs"
                label="Select state"
                value={formData.state}
                onChange={handleStateChange}
              >
                {states.map((state) => (
                  <SelectItem key={state.key}>{state.label}</SelectItem>
                ))}
              </Select>
              <CustomComponent
                handleChange={handleCustomChange}
                value={formData.custom}
              />
            </div>
          </form>
        </CardBody>
        <Divider />
        <CardFooter>
          <Button color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </CardFooter>
      </Card>

      <p>{JSON.stringify(formData)}</p>
    </section>
  );
}
