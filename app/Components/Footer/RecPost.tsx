import Image from "next/image"
import RecPost from "@/app/Components/Footer/Chicken.jpg"

export default function RecentPostsSection() {
    const posts = [
      { img: RecPost, title: "Is fastfood good for your body?", date: "February 28, 2022" },
      { img: RecPost, title: "Change your food habit With organic food", date: "February 28, 2022"},
      { img: RecPost, title: "Do you like fastfood for your life?", date: "February 28, 2022" },
    ]
  
    return (
      <div className="ml-16">
        <h3 className="text-xl font-bold mb-8">Recent Post</h3>
        {posts.map((post, index) => (
          <div key={index} className="flex items-center mb-4">
            <Image src={post.img} alt="" className="w-20 h-20 object-cover mr-4" />
            <div className="">
              <h4 className="font-semibold mb-1">{post.title}</h4>
              <p className="text-sm text-gray-400">{post.date}</p>
            </div>
          </div>
        ))}
      </div>
    )
  };