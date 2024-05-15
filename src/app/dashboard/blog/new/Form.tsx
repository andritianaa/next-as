"use client";
import { MDXInput } from "./MDXInput";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BookCheck, BookDashed } from "lucide-react";
import { ImageUpload } from "@/features/upload/Images";
import { useState } from "react";
import { publish } from "@/actions/blog.actions";
import { toast } from "sonner";
import { PostStatus } from "@prisma/client";

export type formProps = {};

export const Form = (props: formProps) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [text, setText] = useState<string | null>();
  const [title, setTitle] = useState<string>();
  const [subtitle, setSubtitle] = useState<string>();
  const handleImageUrlChange = (newImageUrl: string | null) => {
    setImageUrl(newImageUrl);
  };
  const handleTextChange = (newText: string | null) => {
    setText(newText);
  };
  const handleTitleChange = (newTitle: string) => {
    setTitle(newTitle);
  };
  const handleSubtitleChange = (newSubtitle: string) => {
    setSubtitle(newSubtitle);
  };

  const handlePublish = async () => {
    if (text && title && imageUrl && subtitle) {
      await publish(title, text, imageUrl, PostStatus.online, subtitle);
      toast.success("Saved to draft")
      window.location.href = "/dashboard/blog"
    } else if (!title) {
      toast.error("You must provide a title");
    }else if (!subtitle) {
      toast.error("You must provide a subtitle");
    } else if (!text) {
      toast.error("You must provide a text");
    } else if (!imageUrl) {
      toast.error("You must provide an image");
    }
  };

  const handleDraft = async () => {
    if (title) {
      await publish(title, text ?? "", imageUrl ?? "", PostStatus.draft, subtitle ?? "")
      toast.success("Saved to draft")
    } else {
      toast.error("You must provide a title");
    }
  };

  return (
    <div className="my-4 container space-y-4">
      <Input
        type="text"
        placeholder="My new post"
        label="Title"
        onChange={(e) => handleTitleChange(e.target.value)}
      />
      <Input
        type="text"
        placeholder="My new post"
        label="Subtitle"
        onChange={(e) => handleSubtitleChange(e.target.value)}
      />
      <ImageUpload imageUrl={imageUrl} onImageUpload={handleImageUrlChange} />
      <MDXInput onChange={handleTextChange} />
      <div className="w-full flex gap-4 justify-end pt-4 ">
        <Button
          variant="ghost"
          className="flex gap-2 items-center justify-center"
          onClick={handleDraft}
        >
          <BookDashed />
          Draft
        </Button>
        <Button
          className="flex gap-2 items-center justify-center"
          onClick={handlePublish}
        >
          <BookCheck />
          Publish
        </Button>
      </div>
    </div>
  );
};
