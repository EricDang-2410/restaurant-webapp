import { LoaderIcon } from "lucide-react"

const Loading = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <LoaderIcon className="animate-spin" />
    </div>
  )
}

export default Loading
