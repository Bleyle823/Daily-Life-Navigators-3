import Image from "next/image";
import ClinicalPsychologyForm from "@/public/ClinicalPsychologyForm.png";
import ParallaxContainer from "@/components/Client/ParallaxContainer";
import Input from "@/components/Server/Input";
import Checkbox from "@/components/Client/Checkbox";
import Form from "next/form";
import Select from "@/components/Server/Select";
import Label from "@/components/Server/Label";
import * as motion from "motion/react-client";
import NavigateSVG from "@/components/SVGComponents/NavigateSVG";
import Link from "next/link";

export default function FormServer() {
  const categories = [
    "The Listening Hub",
    "Psychological/Psychometric Assessments",
    "Diagnosis",
    "Psychoeducation",
    "Psychotherapy/Counselling",
    "Group Therapy",
    "Mediation",
    "Training & Coaching",
    "Research",
    "Other",
  ];

  return (
    <div className="flex flex-col bg-[#0d1117] md:grid md:grid-cols-2">
      <ParallaxContainer parallaxAmount={20}>
        <Image src={ClinicalPsychologyForm} alt="form-image" className="max-h-[50vh] w-full object-cover md:h-auto md:max-h-none" />
      </ParallaxContainer>
      <div className="col-start-2 flex flex-col items-center justify-center">
        <div id="contact" className="scroll-mt-20" />
        <Form action={""} className="w-full max-w-102 px-6 py-16 md:px-0 md:py-24">
          <div className="w-full text-xl font-light text-[#f5e6c8] md:text-30">
            Get In Touch
          </div>
          <div className="mt-8 mb-10 text-base text-[#c9b89a] md:text-lg">
            Ready to begin your healing journey? We are here to help. Reach out to Daily Life Navigators for personalized psychological services.
            <br/><br/>
            P.O BOX 51996-00200, Nairobi, Kenya<br/>
            +254-757-011-751<br/>
            info.dailylifenavigators@gmail.com
          </div>
          <Link
            href="https://wa.me/254757011751?text=Hello%2C%20I%20would%20like%20to%20book%20a%20session%20with%20Daily%20Life%20Navigators."
            target="_blank"
            rel="noopener noreferrer"
            className="mb-8 flex w-fit items-center gap-3 rounded-sm bg-[#25D366] px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat on WhatsApp
          </Link>
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
          <div className="mt-10 space-y-5 text-sm text-[#f5e6c8] md:text-base">
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
            className="mt-14 flex w-full cursor-pointer items-center justify-between px-6 py-5 text-base text-[#f5e6c8] md:text-lg"
            initial={{ backgroundColor: "#1e2a4a" }}
            whileHover={{ backgroundColor: "#c9a227" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <span>Send Message</span>
            <NavigateSVG fill="#f5e6c8" />
          </motion.button>
        </Form>
      </div>
    </div>
  );
}
