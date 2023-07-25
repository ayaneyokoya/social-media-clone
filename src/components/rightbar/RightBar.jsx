import "./rightBar.scss"

const RightBar = () => {
  return (
    <div className="rightBar">
        <div className="container">
            <div className="item">
                <span>Suggested</span>
                <div className="user">
                    <div className="userInfo">
                        <img src="/src/assets/pfp.jpeg" alt="" />
                        <span>Jane Doe</span>
                    </div>
                    <div className="buttons">
                        <button>Follow</button>
                        <button>Dismiss</button>
                    </div>
                </div>
                <div className="user">
                    <div className="userInfo">
                        <img src="/src/assets/pfp.jpeg" alt="" />
                        <span>Jane Doe</span>
                    </div>
                    <div className="buttons">
                        <button>Follow</button>
                        <button>Dismiss</button>
                    </div>
                </div>
            </div>
            <div className="item">
                <span>Latest Activities</span>
                <div className="user">
                    <div className="userInfo">
                        <img src="/src/assets/pfp.jpeg" alt="" />
                        <p>
                            <span>Jane Doe</span> changed their cover picture.
                        </p>
                    </div>
                    <span>1 min ago</span>
                </div>
                <div className="user">
                    <div className="userInfo">
                        <img src="/src/assets/pfp.jpeg" alt="" />
                        <p>
                            <span>Jane Doe</span> commented on your post.
                        </p>
                    </div>
                    <span>3 mins ago</span>
                </div>
                <div className="user">
                    <div className="userInfo">
                        <img src="/src/assets/pfp.jpeg" alt="" />
                        <p>
                            <span>Jane Doe</span> just posted a story.
                        </p>
                    </div>
                    <span>10 mins ago</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RightBar