import { Button, Checkbox, Input, Progress, Textarea } from "@/components/ui"

export default function Home() {
  return (
    <div className="p-4">
      <div className="flex flex-col gap-y-4">
        <div>
          <Button variant="elevated">Button</Button>
        </div>
        <div>
          <Input placeholder="I'm an input" />
        </div>
        <div>
          <Progress value={50} />
        </div>
        <div>
          <Textarea placeholder="I'm a textarea" />
        </div>
        <div>
          <Checkbox />
        </div>
      </div>
    </div>
  )
}
