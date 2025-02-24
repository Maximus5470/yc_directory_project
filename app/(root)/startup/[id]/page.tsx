import React, {Suspense} from 'react'
import {client} from "@/sanity/lib/client";
import {PLAYLIST_BY_SLUG_QUERY, STARTUP_BY_ID_QUERY} from "@/sanity/lib/queries";
import {notFound} from "next/navigation";
import {formatDate} from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import markdownit from "markdown-it";
import {Skeleton} from "@/components/ui/skeleton";
import View from "@/components/View";
import StartupCard, {StartupCardType} from "@/components/StartupCard";

export const experimental_ppr = true;
const md = markdownit();

const Page = async ({params}: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const [post, {select: editorPosts}] = await Promise.all([
    await client.fetch(STARTUP_BY_ID_QUERY, {id}),
    await client.fetch(PLAYLIST_BY_SLUG_QUERY, {slug: "editor-picks-new"})
  ]);

  if (!post) return notFound();

  const parseContent = md.render(post.pitch || "");
  return (
    <div>
      <section className={`pink_container !min-h-[230px]`}>
        <p className={`tag`}>{formatDate(post?._createdAt)}</p>
        <h1 className={`heading !font-comic-neue`}>{post.title}</h1>
        <p className={`sub-heading !max-w-5xl`}>{post.description}</p>
      </section>
      <section className={`section_container`}>
        <Image src={post?.image} alt="image" className={`rounded-xl w-full h-auto`}/>
        <div className={`space-y-5 mt-10 max-w-4xl mx-auto`}>
          <div className={`flex-between gap-5`}>
            <Link className={`flex gap-2 items-center mb-3`} href={`/user/${post.author?._id}`}>
              <Image src={post?.author.image} alt={`avatar`} width={64} height={64}
                     className={`rounded-full drop-shadow-lg`}/>
              <div>
                <p className={`text-20-medium`}>{post.author.name}</p>
                <p className={`text-16-medium !text-black-300`}>@{post.author.username}</p>
              </div>
            </Link>
            <p className={`category-tag`}>{post.category}</p>
          </div>
          <h3 className={`text-30-bold`}>Pitch Details</h3>
          {parseContent ? (
            <article className={`prose max-w-4xl font-work-sans break-all`}
                     dangerouslySetInnerHTML={{__html: parseContent}}/>
          ) : (
            <p className={`no-result font-comic-neue`}>No Details Provided</p>
          )}
        </div>
        <hr className={`divider`}/>

        {editorPosts?.length > 0 && (
          <div className={`max-w-4xl mx-auto`}>
            <p className={`text-30-semibold`}>Editor Picks</p>
            <ul className={`card_grid-sm mt-7`}>
              {editorPosts.map((post: StartupCardType, index: number) => (
                <StartupCard post={post} key={index}/>
              ))}
            </ul>
          </div>
        )}

        <Suspense fallback={<Skeleton className={`view_skeleton`}/>}>
          <View id={id}/>
        </Suspense>
      </section>
    </div>
  )
}
export default Page
