const Shorts = [
  {
    username: "NatureVibes",
    likeCount: 1240,
    isLiked: false,
    comment: 132,
    description: "Nature reminds us to slow down and breathe.",
    video: "Shorts/v1.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/45.jpg",
    shareCount: 54,
    isSubscribed: false
  },
  {
    username: "MountainSoul",
    likeCount: 982,
    isLiked: true,
    comment: 89,
    description: "Silence of mountains brings peace to the mind.",
    video: "Shorts/v2.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/12.jpg",
    shareCount: 33,
    isSubscribed: true
  },
  {
    username: "CalmJourney",
    likeCount: 1560,
    isLiked: false,
    comment: 210,
    description: "Sometimes the best therapy is fresh air.",
    video: "Shorts/v3.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/13.jpg",
    shareCount: 76,
    isSubscribed: false
  },
  {
    username: "EarthStories",
    likeCount: 760,
    isLiked: false,
    comment: 45,
    description: "Every sunset teaches us to let go.",
    video: "Shorts/v4.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/14.jpg",
    shareCount: 21,
    isSubscribed: false
  },
  {
    username: "WildEscape",
    likeCount: 1890,
    isLiked: true,
    comment: 310,
    description: "Lost in nature, found in peace.",
    video: "Shorts/v5.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/15.jpg",
    shareCount: 120,
    isSubscribed: true
  },
  {
    username: "GreenMoments",
    likeCount: 540,
    isLiked: false,
    comment: 28,
    description: "Small moments in nature create big memories.",
    video: "Shorts/v6.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/65.jpg",
    shareCount: 14,
    isSubscribed: false
  },
  {
    username: "SkyWatcher",
    likeCount: 1330,
    isLiked: true,
    comment: 167,
    description: "The sky changes, just like life.",
    video: "Shorts/v7.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/17.jpg",
    shareCount: 62,
    isSubscribed: true
  },
  {
    username: "PeacefulLens",
    likeCount: 890,
    isLiked: false,
    comment: 73,
    description: "Quiet places make loud thoughts disappear.",
    video: "Shorts/v8.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/18.jpg",
    shareCount: 29,
    isSubscribed: false
  },
  {
    username: "NatureFlow",
    likeCount: 1720,
    isLiked: true,
    comment: 245,
    description: "Flow like water, stay calm like nature.",
    video: "Shorts/v9.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/19.jpg",
    shareCount: 98,
    isSubscribed: true
  },
  {
    username: "SilentForest",
    likeCount: 640,
    isLiked: false,
    comment: 39,
    description: "In the forest, every breath feels fresh.",
    video: "Shorts/v10.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/20.jpg",
    shareCount: 18,
    isSubscribed: false
  }
];

var sum = "";

Shorts.forEach(function(elem){

    sum += `
    <div class="short">

        <video class="main-img" autoplay loop muted playsinline>
            <source src="${elem.video}" type="video/mp4">
        </video>

        <div class="right">

            <div class="like">
                <h4 class="like-icon">
                    ${elem.isLiked 
                        ? '<i class="love ri-thumb-up-fill"></i>' 
                        : '<i class="ri-thumb-up-line"></i>'}
                </h4>
                <h6>${elem.likeCount}</h6>
            </div>

            <div class="comment">
                <h4 class="comment-icon">
                    <i class="ri-chat-4-line"></i>
                </h4>
                <h6>${elem.comment}</h6>
            </div>

            <div class="share">
                <h4 class="share-icon">
                    <i class="ri-share-forward-line"></i>
                </h4>
                <h6>${elem.shareCount}</h6>
            </div>

            <div class="menu">
                <h4 class="menu-icon">
                    <i class="ri-more-2-fill"></i>
                </h4>
            </div>

        </div>

        <div class="bottom">
            <div class="user">
                <img src="${elem.userProfile}">
                <h4>${elem.username}</h4>
                <button>
                    ${elem.isSubscribed ? "Subscribed" : "Subscribe"}
                </button>
            </div>

            <h3>${elem.description}</h3>
        </div>

    </div>
    `;
});

document.querySelector(".container").innerHTML = sum;
