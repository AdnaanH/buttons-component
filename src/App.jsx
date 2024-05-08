import Button from "./components/Button"
import { FaStar } from "react-icons/fa"

function App() {

  return (
    <main className="min-h-screen w-full flex justify-center items-center">
      <div className="w-11/12 flex flex-col gap-6 items-center">
        <div className="flex flex-wrap justify- items-center gap-4">
          <Button bg="bg-ButtonBlue" py="py-2">Button CTA</Button>
          <Button bg="bg-ButtonBlue" py="py-3" leftIcon={<FaStar />}>Button CTA</Button>
          <Button bg="bg-ButtonBlue" py="py-4" rightIcon={<FaStar />}>Button CTA</Button>
          <Button bg="bg-ButtonBlue" py="py-5">Button CTA</Button>
          <Button bg="bg-ButtonBlue" py="py-4" px="px-4" icon={<FaStar />}></Button>
        </div>
        <div className="flex flex-wrap justify-between items-center gap-4">
          <Button bg="bg-ButtonRed" py="py-2">Button CTA</Button>
          <Button bg="bg-ButtonRed" py="py-3" leftIcon={<FaStar />}>Button CTA</Button>
          <Button bg="bg-ButtonRed" py="py-4" rightIcon={<FaStar />}>Button CTA</Button>
          <Button bg="bg-ButtonRed" py="py-5">Button CTA</Button>
          <Button bg="bg-ButtonRed" py="py-4" px="px-4" icon={<FaStar />}></Button>
        </div>
        <div className="flex flex-wrap justify-between items-center gap-4">
          <Button bg="bg-white" text="text-black" py="py-2">Button CTA</Button>
          <Button bg="bg-white" text="text-black" py="py-3" leftIcon={<FaStar />}>Button CTA</Button>
          <Button bg="bg-white" text="text-black" py="py-4" rightIcon={<FaStar />}>Button CTA</Button>
          <Button bg="bg-white" text="text-black" py="py-5">Button CTA</Button>
          <Button bg="bg-white" text="text-black" py="py-4" px="px-4" icon={<FaStar />}></Button>
        </div>
        <div className="flex flex-wrap justify-between items-center gap-3">
          <Button bg="bg-white" text="text-ButtonBlue" shadow="shadow-none" py="py-2">Button CTA</Button>
          <Button bg="bg-white" text="text-ButtonBlue" shadow="shadow-none" py="py-3" leftIcon={<FaStar />}>Button CTA</Button>
          <Button bg="bg-white" text="text-ButtonBlue" shadow="shadow-none" py="py-4" rightIcon={<FaStar />}>Button CTA</Button>
          <Button bg="bg-white" text="text-ButtonBlue" shadow="shadow-none" py="py-5">Button CTA</Button>
          <Button bg="bg-white" text="text-ButtonBlue" shadow="shadow-none" py="py-4" px="px-4" icon={<FaStar />}></Button>
        </div>
        <div className="flex flex-wrap justify-between items-center gap-3">
          <Button bg="bg-white" text="text-ButtonBlue" shadow="shadow-none" px="px-3" py="py-2">Button CTA</Button>
          <Button bg="bg-white" text="text-ButtonBlue" shadow="shadow-none" px="px-3" py="py-3" leftIcon={<FaStar />}>Button CTA</Button>
          <Button bg="bg-white" text="text-ButtonBlue" shadow="shadow-none" px="px-3" py="py-4" rightIcon={<FaStar />}>Button CTA</Button>
          <Button bg="bg-white" text="text-ButtonBlue" shadow="shadow-none" px="px-3" py="py-5">Button CTA</Button>
          <Button bg="bg-white" text="text-ButtonBlue" shadow="shadow-none" py="py-4" px="px-4" icon={<FaStar />}></Button>
        </div>
        <div className="flex flex-wrap justify-between items-center gap-3">
          <Button bg="bg-white" text="text-black" shadow="shadow-none" px="px-3" py="py-2">Button CTA</Button>
          <Button bg="bg-white" text="text-black" shadow="shadow-none" px="px-3" py="py-3" leftIcon={<FaStar />}>Button CTA</Button>
          <Button bg="bg-white" text="text-black" shadow="shadow-none" px="px-3" py="py-4" rightIcon={<FaStar />}>Button CTA</Button>
          <Button bg="bg-white" text="text-black" shadow="shadow-none" px="px-3" py="py-5">Button CTA</Button>
          <Button bg="bg-white" text="text-black" shadow="shadow-none" py="py-4" px="px-4" icon={<FaStar />}></Button>
        </div>
      </div>
    </main>      
  )
}

export default App
