import svgPaths from "./svg-skgz6rt9gi";

function Container() {
  return <div className="absolute bg-[rgba(255,255,255,0)] border-2 border-[#fccee8] border-solid h-[222.468px] left-0 rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] top-0 w-[239.901px]" data-name="Container" />;
}

function Icon() {
  return (
    <div className="absolute inset-[14.22%_9%_15.48%_8.36%]" data-name="Icon">
      <div className="absolute inset-[-5.88%_-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 52">
          <g id="Icon">
            <path d={svgPaths.pb4546f0} fill="var(--fill-0, #FF2056)" id="Vector" stroke="var(--stroke-0, #FF2056)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.36968" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[82.36px] overflow-clip size-[64.98px] top-[46.92px]" data-name="Icon">
      <Icon />
    </div>
  );
}

export default function FloatingElements() {
  return (
    <div className="relative rounded-[24px] size-full" data-name="FloatingElements3" style={{ backgroundImage: "linear-gradient(141.67deg, rgb(253, 242, 248) 3.3924%, rgb(255, 241, 242) 96.608%)" }}>
      <Container />
      <Icon1 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[125.34px] not-italic text-[#101828] text-[16px] text-center text-nowrap top-[133.3px] translate-x-[-50%]">User-centric design</p>
    </div>
  );
}