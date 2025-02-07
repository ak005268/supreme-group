import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
   toast("Successfully submitted!");
  // alert("Form Data: " + JSON.stringify(data, null, 2));
  };

  return (
    <section id="contact" className="bg-c3 h-[1020px] flex justify-center items-center p-6">
      <div className="flex flex-col md:flex-row gap-10 max-w-5xl w-full p-8 rounded-lg ">

        <div className="md:w-1/2 text-gray-800">
          <h2 className="font-bold text-white text-[48px]">Get in touch</h2>
          <div className="bg-white w-12 h-1 mt-4"></div>

          <p className="text-lg text-white mt-6">For general enquiries</p>

          <p className="font-semibold text-white text-xl mt-6">Address:</p>
          <p className="text-lg text-white">110, 16th Road, Chembur, Mumbai – 400071</p>

          <p className="font-semibold text-white text-xl mt-6">Phone:</p>
          <p className="text-lg text-white">+91 22 25208822</p>

          <p className="font-semibold text-white text-xl mt-6">Email:</p>
          <p className="text-lg text-white">info@supremegroup.co.in</p>
        </div>

        <div className="md:w-1/2">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Full Name"
                {...register("name", { required: "Full Name is required" })}
                className="w-full p-3 border-b-2 text-white border-b-white border-white focus:border-white outline-none"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
                className="w-full p-3 border-b-2  text-white border-b-white border-white focus:border-white outline-none"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div>
              <input
                type="text"
                placeholder="Subject"
                {...register("subject", { required: "Subject is required" })}
                className="w-full p-3 border-b-2  text-white border-b-white border-white focus:border-white outline-none"
              />
              {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}
            </div>

            <div>
              <input
                placeholder="Message"
                {...register("message", { required: "Message is required" })}
                className="w-full p-3 border-b-2  text-white border-b-white border-white focus:border-white outline-none"
              ></input>
              {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-[141px] cursor-pointer h-[50px] mt-[50px] rounded-full text-white hover:text-black hover:bg-white border border-white hover:border-c2 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
