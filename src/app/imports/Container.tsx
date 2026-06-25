import svgPaths from "./svg-b3artj8j61";
import clsx from "clsx";
import imgScreenshot20251216At22939Pm1 from "figma:asset/beacfb1955310f56039605f02d9be059c47212b3.png";
type Vector2Props = {
  additionalClassNames?: string;
};

function Vector2({ additionalClassNames = "" }: Vector2Props) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Vector"></g>
      </svg>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[28.363px] left-[55.75px] top-[114.25px] w-[125.702px]" data-name="Heading1">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[63.57px] not-italic text-[16px] text-center text-nowrap text-white top-[-1px] translate-x-[-50%]">Samsung Iris</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[22.22px] left-[88.36px] top-[149.84px] w-[64.365px]" data-name="Paragraph3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[32.05px] not-italic text-[#99a1af] text-[14px] text-center text-nowrap top-[0.5px] translate-x-[-50%]">AI Project</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[49.174px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[4.48%_5.91%_5.91%_4.48%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 49">
            <path d={svgPaths.p19592a00} fill="var(--fill-0, #FB64B6)" id="Vector" stroke="var(--stroke-0, #FB64B6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.4055" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[2.23px] size-[49.174px] top-[2.23px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Vector() {
  return (
    <div className="absolute contents inset-[15.88%_56.32%_20.59%_43.68%]" data-name="Vector">
      <Vector2 additionalClassNames="inset-[15.88%_56.32%_20.59%_43.68%]" />
      <div className="absolute inset-[15.88%_56.32%_20.59%_43.68%]" data-name="Vector">
        <div className="absolute inset-[-23.96%_-3.12px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 20">
            <path d="M3.12265 3.12265V16.1541" id="Vector" stroke="var(--stroke-0, #FB64B6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6.2453" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[20.513px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Vector />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[11.068px] items-start left-[5.51px] top-[29.71px] w-[6.853px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Vector1() {
  return (
    <div className="absolute contents inset-[43.68%_20.59%_56.32%_15.88%]" data-name="Vector">
      <Vector2 additionalClassNames="inset-[43.68%_20.59%_56.32%_15.88%]" />
      <div className="absolute inset-[43.68%_20.59%_56.32%_15.88%]" data-name="Vector">
        <div className="absolute inset-[-1.68px_-23.96%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 4">
            <path d="M8.71576 1.68479H1.68479" id="Vector" stroke="var(--stroke-0, #FB64B6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.36958" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[3.697px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Vector1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[6.853px] items-start left-[3.4px] top-[31.81px] w-[11.068px]" data-name="Container">
      <Icon2 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[13.433px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[15.88%_20.59%_20.59%_15.88%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
            <path d={svgPaths.p24954500} fill="var(--fill-0, #FB64B6)" id="Vector" stroke="var(--stroke-0, #FB64B6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.2668" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[37.98px] size-[13.433px] top-[11.67px]" data-name="Container">
      <Icon4 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="overflow-clip relative size-[53.632px]" data-name="Icon3">
      <Container />
      <Container1 />
      <Container2 />
      <Container3 />
    </div>
  );
}

function FloatingElements() {
  return (
    <div className="bg-black h-[211.405px] relative rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] w-full" data-name="FloatingElements1">
      <Heading />
      <Paragraph />
      <div className="absolute flex items-center justify-center left-[105.08px] size-[69.703px] top-[-139.04px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[201.78deg]">
          <Icon3 />
        </div>
      </div>
      <div className="absolute flex h-[28.528px] items-center justify-center left-[24.21px] top-[66.93px] w-[186.325px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[359.076deg]">
          <div className="h-[25.534px] relative rounded-[56px] w-[185.937px]" data-name="Screenshot 2025-12-16 at 2.29.39 PM 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[56px]">
              <img alt="" className="absolute h-[246.15%] left-0 max-w-none top-[-83.08%] w-full" src={imgScreenshot20251216At22939Pm1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Container4() {
  return (
    <div className="relative size-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-0 pl-[5.961px] pr-[7.532px] pt-[18.835px] relative size-full">
          <div className="flex h-[234.679px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none rotate-[354deg] w-full">
              <FloatingElements />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}