import { Link } from "react-router-dom";
import Button from "../../Button";
import cn from "./style.module.css";
export default function Showcase() {
  return (
    <section className={cn.body}>
      <div>
        <h1>Skills speak louder than words</h1>
        <p>
          We help companies develop the strongest tech teams around. We help
          candidates sharpen their tech skills and pursue job opportunities.
        </p>
        <div className={cn.btns}>
          <Link to={"/registration"}>
            <Button text={"Sign up"} />
          </Link>
          <Link to={"/dashboard"}>
            <Button variant={"white"} text={"Request demo"} />
          </Link>
        </div>
        <p>
          Over 40% of developers worldwide and 3,000 companies use HackerRank
        </p>
        <div className={cn.users}>
          <img
            src="https://s3-alpha-sig.figma.com/img/e64a/5012/246f304c05700a71748b8bb4b17b6d74?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RPFWxgocYlSoRhezH~bj9ATgpA8tXZVSGWwm7jAOobkGEQC7dWIJ9xpI0BTaaDsryM6TRGHo5iGztdojxxB~uSg4BtT5xhNiGYEbm7r5unAfCKCLpYkfWCtFFkWmQ86FSzrzGe6lyqS6rSC~~eQzNyVLkDiECcjwZej38pEqxf8AqqYpTECNv3~qvEJkrfnXFGQVF7risElyV~NTMDd0vK3mcWvWVr7RA~BprsWQvaUjgyD1F7p8qdoHiuYxMsTokaYrCN9Wnc8NRhp~obx0xWHJQZv2dItiql7b92jn2t76RGObL0lSJkHMSEyCoPq02pl5PEbRfKQin7AU9C0FIA__"
            alt="peloton"
          />
          <img
            width={"130px"}
            src="https://s3-alpha-sig.figma.com/img/e8ac/048b/63d067b712e90b63c069a817af126203?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DY417EFn3WTLDyrYNcglJ29v-3CyW8P~HcY6hbxBb5QgwI~VH93aMC7CfbPo0HMnl1fp9yt8yPRIUEgqMGaKg3lUmqY7LEp8PR6zjAFQxLe8roBV~iynvNGER~gVokrwXLEL9pI7~GWm8tNFo6THJ4ZLWdd-9~WtG4FcyXFFwmlXyDNoLPCND41e6Pd-ksCscHuPGI6Qxu3G2PosIDQBczP46~EncH8fofE5grH1iaxYSFEblfC0ImRVA6gfGPSpxe9OwNDfIO~rbI1zkFtcbUFFQrRAdpz1I3taMy8-yIjORZbyNjc9KTEZfiGxCLE0op7ugpHX2Ws34zBT87eG9w__"
            alt="atlassian"
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/d2e2/a749/9479928158d9a2c02eb3ea387c1bb923?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oXWv-4N3zlkKQlu07P8fIjuyjJDB-XKTXZvbm1NGtxjMRb3f5yBIrj~oF4RiYQfw6RzlWFKQuAGEI~ZhJhmq40EXFhrhdPH0XQHzeN63X3OYqSghNI~2urFB~Aso5cWIvLZxTDKiJ6ITP0boydzm2p6VV-9j0GEq6ok~PfV5MpwunA9m~R8rQeHmS-VzLbMe7r99-ry-2e-1aKqNi9hDcsItOoJznMCEdX2mcVOCiMt8nJtSr5aSB3~JK63BXId8VqeCS69LvO7b9DFZgCj0ShVfxF7rondBB1UT~EJrepAmRjV~VCIYpz3pXZtc2shyn401VaMMk0ymo930p5WnAg__"
            alt="bloomberg"
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/4182/3cad/d78b4df03f0e7f2be167cf87c563b34c?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wv~E-AckgVr95Hp3g9PubBScb~NnfUD8fOfDE8Yiqg-QYSH4tJK5n7hGg210ZwPSs-AM20~DXHQRed~mRF~ngOKqYS4JQmAzzdhwZg5bzUl5RHLDHtu29wyPIqH3RDrMcf2dd8B9sR56QbrO-q6b~WDiy~qXcxAcIk7Bfxfh7ZcUINoCTTE09kAacT5cPIUBEiZK2pM-tvLtyIluNTNnGwwRvO0yi1NNz7gUoi2ouB5sGOu2HaoDNSX-d5JEESdModgVr9kwAHiIcapLuNP95HSMvB0fzVhIhd7CR4ew7Si0zkI4KgSXRg3p8SFUjLEk-8wWGTgE-dI~HvkqZTpNBg__"
            alt="vmware"
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/c406/900f/df2a7cb32756d475d1b7c98eddd2d87c?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j0aqsRBL2SnxiAeoPijZJiEJeAEiL0ayoQU8te7iWYfr8nHclC6fRcJIeGBneGAgFdwYxwplpKegqbFYjtGUSCHYJHclAPD76gaTy-SdH~RTJucrMwCJm-6nByskkbwrwrGXS-4VmOO9a2VvVeInC8XlxJJst0a-NKNRPkeADxuqvYgYhUBGWB6xpQmru2s76xRj1oEWjMAJrN9GztuRQl86DUX2ypTDI2HwbbBHpYpSztT6RQqBqHZZddoxTkALvdsz5TIjx6UjTm1L7Bz3bmY9AzERujZGlKF9lfRoxJKiCq1FFtaFrFMTwoa3cmKMF3oVkEccx~uptWaP~VKUow__"
            alt="stripe"
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/b3c7/70ad/8a1818b8ca4e7eb12ae2a6e55104e906?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kBFziCXYbBjPxIajjV6k7CEqso6eNS6y3dZvnYOuJsQOZ2TbSkYHM-HIfU49olElTwohP-zts0lfJjWFRmVyqfg~mKS5bOdx13chAXL18BDeqeLJ90FEM5K2mZaWwl4AieolAcNRJeMgOiSoRChbiJxsDtDX7GnDBFUP00UscqEPq6O61EO0fCoDpxhbr0nMXSDc7hLTDXiH6R4JAWfXndm1Uw9eY3djufYcBeZCk3LUVPLtqul5BjTMk4VlPVm3271gvK2ohMkPY8uBnmMZwhG4DrY-uyncVSkcr9LlEgiHRcPI-sXK3gloIS2diEXUDVFUw1gQgjWGvovs8n2rtw__"
            alt="goldman"
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/623f/7c07/1db4897f2d14a96d198105bbd5318068?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lYvgYGcNYKjK~R12UIqTih3gMrfrDitekNSrdUyHc7YTjBALyC7VKwwITOfonBxAFJmqaLDr6U0d14ljfX5lj2O9neQWXhiIJlJMTZqzZbHfkpNI9JjVfjsK4N1LkGgnVBjrv5z6-5mY6R19Qm4gWqvdXVUhQ73YDnI2K12GfHR1KOVhop35QTRMVQMVOxEhZvQ77csGj5P2V4WFoIoOx99mb5HqxJ3JXpz736iheMdfIWVJhMKU7~ZUHk4bXhsy9Tyi6R34lujVRUi-Eaxkd1hHsJU2F9pfcKfdgMj15BcG7mvEtM1RPpMUe7~yCUymFvoyyfDuG9gmhEeMKz7aMA__"
            alt="adobe"
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/eef3/0415/616bf07db7fe5855f04ab0a991adde28?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VewdU5jFMIOv~TbVU2xZTTkdQsNYZCVLYy332i9m~RYt15Z29Fu1NsfMOaTFIYke7uzg-G~ob~dBOPPc4E0D8hQmtuPYJs1krkM4e0VgUpY~I6hoEXuhAueM2Sf-LQ1WaORxsGDlYZ0VK6KziQVnpY1UJFT2ulZpEhVQj0UrvraJ7oPMo-gFHUN8pIHmzijuun-Z42hxI2Eceutx1jInvYYSRfvcTTMSN5DpSwwPudVWxVJnWWcXyjm7hd3~WIw94PNMLoyA9ecZ6RbxtLxPeieKJ3gnK-2OKGhQieZLAxnQrWYt24Z35~X-c~s6soT5yIT493uXkFc5yOqZ-dyOsg__"
            alt="linkedin"
          />
        </div>
      </div>
    </section>
  );
}
