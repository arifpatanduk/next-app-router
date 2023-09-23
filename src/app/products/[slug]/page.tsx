"use client";

import { Card, CardHeader, Image } from "@nextui-org/react";

type DetailProductSlug = { params: { slug: string } };

export default function DetailProductPage(props: DetailProductSlug) {
  const { params } = props;
  return (
    <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            What to watch
          </p>
          <h4 className="text-white font-medium text-large">{params.slug}</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="/images/fruit-1.jpeg"
        />
      </Card>
    </div>
  );
}
