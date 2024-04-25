import React, { useEffect, useRef, useState } from "react";
import "./chat.scss";
import EmojiPicker from "emoji-picker-react";
const Chat = () => {
  const endRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  });
  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>John Doe</span>
            <p>Lorem, ipsum dolor sit amets.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message own">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <img src="https://picsum.photos/200" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              autem laborum ex impedit, repellendus ullam. Optio molestiae
              minima ipsam consequuntur, vitae non. Adipisci sequi, esse
              similique numquam accusamus non corporis.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message ">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              autem laborum ex impedit, repellendus ullam. Optio molestiae
              minima ipsam consequuntur, vitae non. Adipisci sequi, esse
              similique numquam accusamus non corporis.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <label htmlFor="file">
            <img src="./img.png" alt="" />
          </label>
          <input type="file" id="file" style={{ display: "none" }} />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          value={text}
          placeholder="Type a message..."
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
