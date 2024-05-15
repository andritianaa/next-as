/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Upload } from "lucide-react";
import { Button } from "../../components/ui/button";
import { FormEventHandler } from "react";
import { uploadFile } from "../../actions/upload.actions";
import Image from "next/image";
import { toast } from "sonner";

export type ImagesProps = {
  imageUrl: string | null;
  onImageUpload: (newImageUrl: string) => void;
};

export const ImageUpload = (props: ImagesProps) => {
  const [imageUrl, setImageUrl] = useState<string | null>(props.imageUrl);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const file = formData.get("file") as File;

    if (file.size > 0) {
      const newImageUrl = await uploadFile(formData);
      setImageUrl(newImageUrl);
      props.onImageUpload(newImageUrl);
    } else {
      toast("You must provide a file");
    }
  };

  return (
    <div className="p-4 block w-full border border-input rounded-lg bg-background text-sm">
      <form
        className="flex items-center justify-between flex-wrap gap-4"
        onSubmit={handleSubmit}
      >
        <input type="file" name="file" />
        <Button
          type="submit"
          className="flex gap-2 justify-center items-center"
        >
          <Upload /> Upload
        </Button>
      </form>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="blog post cover"
          className="mt-4 rounded-lg h-52 object-cover"
        />
      ) : (
        <Image
          src="/placeholder.png"
          height={256}
          width={256}
          alt="Placeholder"
          className="mt-4 rounded-lg h-52 object-cover"
        />
      )}
    </div>
  );
};
