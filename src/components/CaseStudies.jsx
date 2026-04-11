import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Shopify from "/images/seo_placeholder.webp";
import Event from "/images/pjsk_placeholder.png";
import Dashboard from "/images/dashboard_placeholder.png";

export default function CaseStudies() {
  return (
    <div className="flex justify-center p-5 flex-wrap">
      <Card className="relative mx-auto w-full max-w-xl pt-0 mb-10 shadow-lg">
        <div className="absolute inset-0 z-30 aspect-video" />
        <img
          src={Shopify}
          alt=""
          className="relative z-20 aspect-video w-full object-cover"
        />
        <CardHeader>
          <CardAction>
            <Badge variant="secondary" className="font-lilex text-center">
              SEO
            </Badge>
          </CardAction>
          <CardTitle className="font-sour font-bold text-orange-500 text-[25px]">
            project name
          </CardTitle>
          <CardDescription className="font-lilex text-[12px] text-black">
            What I did (ie. Shopify site and paid ads setup).
          </CardDescription>
          <CardDescription className="font-lilex text-[12px] text-black">
            Resulted in ____.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button className="w-full font-lilex bg-blue-200 text-blue-600 p-5 rounded-full cursor-pointer font-bold">
            view case study ↗
          </Button>
        </CardFooter>
      </Card>

      <Card className="relative mx-auto w-full max-w-xl  pt-0 mb-10 shadow-lg">
        <div className="absolute inset-0 z-30 aspect-video" />
        <img
          src={Event}
          alt=""
          className="relative z-20 aspect-video w-full object-cover"
        />
        <CardHeader>
          <CardAction>
            <Badge variant="secondary" className="font-lilex text-center">
              Campaign
            </Badge>
          </CardAction>
          <CardTitle className="font-sour font-bold text-orange-500 text-[25px]">
            project name
          </CardTitle>
          <CardDescription className="font-lilex text-[12px] text-black">
            What I did (ie. Event planned and strategized).
          </CardDescription>
          <CardDescription className="font-lilex text-[12px] text-black">
            Resulted in ____.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button className="w-full font-lilex bg-blue-200 text-blue-600 p-5 rounded-full cursor-pointer font-bold">
            view case study ↗
          </Button>
        </CardFooter>
      </Card>

      <Card className="relative mx-auto w-full max-w-xl  pt-0 mb-10 shadow-lg">
        <div className="absolute inset-0 z-30 aspect-video" />
        <img
          src={Dashboard}
          alt=""
          className="relative z-20 aspect-video w-full object-cover"
        />
        <CardHeader>
          <CardAction>
            <Badge variant="secondary" className="font-lilex text-center">
              Analytics
            </Badge>
          </CardAction>
          <CardTitle className="font-sour font-bold text-orange-500 text-[25px]">
            project name
          </CardTitle>
          <CardDescription className="font-lilex text-[12px] text-black">
            What I did (ie. Set up dashboard).
          </CardDescription>
          <CardDescription className="font-lilex text-[12px] text-black">
            Resulted in ____.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button className="w-full font-lilex bg-blue-200 text-blue-600 p-5 rounded-full cursor-pointer font-bold">
            view case study ↗
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
