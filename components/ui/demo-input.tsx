import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from '@/components/ui/input-group'

export default function Input05() {
  return (
    <InputGroup className="mx-auto max-w-sm hover:border-cyan-400 hover:ring-[3px] hover:ring-cyan-400/20 focus-within:border-cyan-400 focus-within:ring-[3px] focus-within:ring-cyan-400/20">
      <InputGroupAddon className="border-0 bg-transparent">
        <InputGroupText className="text-[#94A3B8]">
          https://
        </InputGroupText>
      </InputGroupAddon>

      <InputGroupInput
        placeholder="example"
        className="border-0 bg-transparent pl-0.5 shadow-none outline-none focus-visible:border-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-white"
      />

      <InputGroupAddon
        align="inline-end"
        className="border-0 bg-transparent"
      >
        <InputGroupText className="text-[#94A3B8]">
          .com
        </InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  )
}
