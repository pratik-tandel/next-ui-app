"use client";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { DatePicker } from "@nextui-org/date-picker";
import { Divider } from "@nextui-org/divider";
import { Input } from "@nextui-org/input";
import { Camera } from "lucide-react";
import { useState } from "react";
import { parseDate } from "@internationalized/date";

import { subtitle, title } from "@/components/primitives";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: parseDate("2024-12-26"),
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

      {/* <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Documentation
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div> */}

      {/* <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div> */}

      {/* <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <Input label="Name" placeholder="Enter your name" type="text" />
        <Input label="Email" placeholder="Enter your email" type="email" />
      </div> */}

      <div>
        <Camera color="red" size={48} />
      </div>

      <Card className="max-w-[400px]">
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
                className="max-w-[284px]"
                label="Birth date"
                name="dob"
                value={formData.dob}
                onChange={handleDateChange}
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
