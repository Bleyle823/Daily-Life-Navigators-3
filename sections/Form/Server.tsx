import Image from "next/image";
import FormImage from "@/public/FormImage.png";
import ParallaxContainer from "@/components/Client/ParallaxContainer";
import Input from "@/components/Server/Input";
import Checkbox from "@/components/Client/Checkbox";
import Form from "next/form";
import Select from "@/components/Server/Select";
import Label from "@/components/Server/Label";
import * as motion from "motion/react-client";
import NavigateSVG from "@/components/SVGComponents/NavigateSVG";

export default function FormServer() {
  const categories = [
    "Clinical Diagnosis",
    "Psychoeducation",
    "Training & Coaching",
    "Research",
    "Other",
  ];

  return (
    <div className="flex flex-col bg-[#ffbf69] md:grid md:grid-cols-2">
      <ParallaxContainer parallaxAmount={20}>
        <Image src={FormImage} alt="form-image" className="h-auto w-full" />
      </ParallaxContainer>
      <div className="col-start-2 flex flex-col items-center justify-center">
        <Form action={""} className="w-full max-w-102 px-5 py-24 md:p-0">
          <div className="w-full text-xl font-light md:text-30">
            Get In Touch
          </div>
          <div className="mt-8 mb-10 text-base md:text-lg">
            Ready to Begin? We are here to help. Reach out to Daily Life Navigators for personalized psychological services.
            <br/><br/>
            P.O BOX 51996-00200, Nairobi, Kenya<br/>
            +254-757-011-751<br/>
            info.dailylifenavigators@gmail.com
          </div>
          <div className="flex flex-col gap-4">
            <Label label="Full Name">
              <Input type="text" placeholder="Enter your name" />
            </Label>
            <Label label="Email Address">
              <Input type="email" placeholder="Enter your email address" />
            </Label>
            <Label label="Phone number">
              <div className="flex -space-x-4 md:-space-x-6">
                <Select options="dial code" />
                <Input type="tel" placeholder="Enter your phone number"></Input>
              </div>
            </Label>
          </div>
          <div className="mt-10 space-y-5 text-sm text-[#2b3530] md:text-base">
            <p>I am interested in:</p>
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <Checkbox key={category}>{category}</Checkbox>
              ))}
            </div>
          </div>
          <Checkbox className="mt-8-75" required={true}>
            I agree to the Policies and Terms
          </Checkbox>
          <motion.button
            type="submit"
            className="mt-14 flex w-full cursor-pointer items-center justify-between px-6 py-5 text-base text-[#d1ccbf] md:text-lg"
            initial={{ backgroundColor: "#2b3530" }}
            whileHover={{ backgroundColor: "#ffbf69" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <span>Send Message</span>
            <NavigateSVG fill="#cbf3f0" />
          </motion.button>
        </Form>
      </div>
    </div>
  );
}
