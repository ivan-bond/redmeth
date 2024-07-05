import React from "react";

export default function Home() {
  return (
    <>
    <div className="h-screen bg-black items-center justify-center">
      <div className="chat chat-start p-10">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
          <span className="text-3xl">C</span>
          </div>
        </div>
        <div className="chat-header">
          Cracky
          <time className="text-xs opacity-50">4:20</time>
        </div>
        <div className="chat-bubble">Yo redmeth, I need crack. You got some?</div>
        <div className="chat-footer opacity-50">
          Delivered
        </div>
      </div>
      <div className="chat chat-end p-10">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="chat-header">
          redmeth
          <time className="text-xs opacity-50">4:21</time>
        </div>
        <div className="chat-bubble">I got you Hermano. Come over 🤪</div>
      </div>
      <div className="chat chat-end p-10">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="chat-header">
          redmeth
          <time className="text-xs opacity-50">4:22</time>
        </div>
        <div className="chat-bubble">It's worldwide shipping bro! 🌐</div>
        <div className="chat-footer opacity-50">
          Seen at 4:22
        </div>
        <br />
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    </div>
    <div className="h-screen bg-white flex flex-wrap items-center justify-center rounded-t-3xl">
      <div className="card h-56 w-56 bg-red-600 shadow-xl">
        <div className="card-body items-center text-center">
        </div>
      </div>
      <div className="avatar">
        <div className="w-56 rounded-lg">
          <img src="https://media.istockphoto.com/id/688550958/de/vektor/schwarze-pluszeichen-positives-symbol.jpg?s=612x612&w=0&k=20&c=UHQcsThJfTtpaOsmF6uIUy5y1Kbk5d7RtCT9XG7lLZM=" />
        </div>
      </div>
      <div className="avatar">
        <div className="w-56 rounded-lg">
          <img src="https://api.ardmediathek.de/image-service/images/urn:ard:image:e07dddf357d1bed3?w=960&ch=5484359b5138bc1d&imwidth=960" />
        </div>
      </div>
      <div className="avatar">
        <div className="w-56 rounded">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX7+/tZWVn+/v6lpaVNTU1TU1PR0dH8/PxXV1f4+PhLS0tPT09bW1tUVFTt7e29vb2Ojo6AgIDe3t53d3dmZmaqqqrX19dxcXHq6uqzs7PY2NjLy8tgYGC3t7fl5eVERET7HIcLAAACgElEQVR4nO3b7VLbMBCFYXkjW5Yl2QkhhDQB7v8ua1M6w7S/dzdN3+cG4CD0tV6FAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD3I4m1ZJkuiMxPg62n2TCk5OU4xikWQ7GMxyWnnA3yJbk+x7Hramep1q4vz4PoJ8xBTtNoGu6Xcc3Y4knW30A3ZZZLNB6+76aL5Kw8HV+iW7xN/CG6Y5jk3Kyn4He1nZPuGMoQPSbhN+Wqu9rIvvcbwE/9XjQDBrk134DdeNPd+OfeOeA6iLNmwPxavAN2/atmwDx7/5N2Y5tVJ2JyXklXLWnOwyQH74jtoLyWLr77Ya1x0U2Y5ptnwjp2N+1jqSyTY8JOfQi3iPvidapZR7Aon2jCdj8MB7fbRZ0O2vm2LTHLbvI52bRpp3z7/ZLkfd/HUnpTJfb7d6Na1PpnlPl62dl6G2bTgmIwL5eu8UwKbQAAAAAA/H8e/sZtGzBrN5n8yb6tTVQ/Of2dbx6sa22XYRb1evdvW7209H2zLZh+1ktN8qW029q+qvXXi9q1j11IBrMxHcr49SONI45dORhElL1n25fBtydZpurY9TVOi3YD5lxduzFqu81BcdvIWRbvhpq4aO6La8IH78XI2b+fZuwUA4Y76WtTXU5f7yDh+4P3JlbV3sQcxLl/duvZV11p7qNHWLfP++q6H9axxqtmvu1icfbt3Gtn7YOp+L63GMtLUG/du0xuJ++6vZnRjRe2Z0EnpxbTut4sTia3fBmeo8cFo+9N3q6FbRTz27HFKVqaSjsu2agUtbUnurwhDVa1tjVhduhre/waOwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIB/yU+rHjl6TulSQQAAAABJRU5ErkJggg==" />
        </div>
      </div>
      <label className="swap swap-flip text-9xl">
  
        {/* this hidden checkbox controls the state */}
        <input type="checkbox" />
        
        <div className="swap-on">😇</div>
        <div className="swap-off">❓</div>
      </label>
    </div>
    </>
  );
}
