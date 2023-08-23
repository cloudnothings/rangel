import ChatboxContainer from "@/components/chatbox/chatbox-container";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center pt-24 sm:pt-[57px] h-[calc(100vh-57px)]">
      <ChatboxContainer />
    </main>
  )
}
