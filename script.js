const username = '2KAbhishek';
const linkList = document.querySelector('.link-list');
const linksSection = document.querySelector('.links');
const filterInput = document.querySelector('.filter-links');

const buildIcon = function (link) {
    return `
        <span class='${link.icon}' style='color: ${link.color};'></span>
    `;
};

const buildUrl = function (link) {
    if (link.url.includes('http')) {
        return link.url;
    }
    return 'https://' + link.url + username;
};

const displayLinks = function (links) {
    filterInput.classList.remove('hide');
    for (const link of links) {
        let listItem = document.createElement('li');
        listItem.classList.add('link');
        listItem.innerHTML = `
            <a href=${buildUrl(link)} target='_blank'>
                <div>
                    <h3>
                        ${buildIcon(link)}
                        ${link.name}
                    </h3>
                    <p>${link.description}</p>
                </div>
            </a>`;
        linkList.append(listItem);
    }
};

// dynamic search
filterInput.addEventListener('input', function (e) {
    const search = e.target.value;
    const links = document.querySelectorAll('.link');
    const searchLowerText = search.toLowerCase();

    for (const link of links) {
        const lowerText = link.innerText.toLowerCase();
        if (lowerText.includes(searchLowerText)) {
            link.classList.remove('hide');
        } else {
            link.classList.add('hide');
        }
    }
});

const links = [
    {
        name: 'Portfolio',
        description: 'My own place on the internet',
        url: 'https://2kabhishek.github.io',
        icon: 'fa-brands fa-fort-awesome',
        color: '#1688f0'
    },
    {
        name: 'Blog',
        description: 'I write about tech and stuff',
        url: 'https://2kabhishek.github.io/blog',
        icon: 'fa-brands fa-blogger',
        color: '#f57c00'
    },
    {
        name: 'GitHub',
        description: 'My favourite place :)',
        url: 'github.com/',
        icon: 'fa-brands fa-github',
        color: '#24292e'
    },
    {
        name: 'LinkedIn',
        description: 'Connections and career updates',
        url: 'linkedin.com/in/',
        icon: 'fa-brands fa-linkedin',
        color: '#0077B5'
    },
    {
        name: 'Dev',
        description: 'I share and learn with you!',
        url: 'dev.to/',
        icon: 'fa-brands fa-dev',
        color: '#505050'
    },
    {
        name: 'HackerRank',
        description: 'For problem solving skills',
        url: 'hackerrank.com/',
        icon: 'fa-brands fa-hackerrank',
        color: '#1ba94c'
    },
    {
        name: 'Instagram',
        description: 'When I snap pics and hit record',
        url: 'https://instagram.com/iam2kabhishek',
        icon: 'fa-brands fa-instagram',
        color: '#e1306c'
    },
    {
        name: 'Twitter',
        description: 'Memez, tech, rants, philosophy',
        url: 'twitter.com/',
        icon: 'fa-brands fa-twitter',
        color: '#1da1f2'
    },
    {
        name: 'YouTube',
        description: 'Tech tutorials and stuff',
        url: 'youtube.com/c/',
        icon: 'fa-brands fa-youtube',
        color: '#ff0000'
    },
    {
        name: 'Telegram',
        description: 'Connect with me directly',
        url: 'https://t.me/iam2kabhishek',
        icon: 'fa-brands fa-telegram',
        color: '#0088cc'
    },
    {
        name: 'Reddit',
        description: 'Lurk mostly, sometimes I post',
        url: 'reddit.com/user/',
        icon: 'fa-brands fa-reddit',
        color: '#ff4500'
    },
    {
        name: 'freeCodeCamp',
        description: 'Where I started web dev',
        url: 'freecodecamp.org/',
        icon: 'fa-brands fa-free-code-camp',
        color: '#006400'
    },
    {
        name: 'Twitch',
        description: "I'll stream someday!",
        url: 'twitch.tv/',
        icon: 'fa-brands fa-twitch',
        color: '#6441a5'
    },
    {
        name: 'Vimeo',
        description: "YouTube's brother",
        url: 'vimeo.com/',
        icon: 'fa-brands fa-vimeo',
        color: '#1ab7ea'
    },
    {
        name: 'Codepen',
        description: 'For trying out design ideas',
        url: 'codepen.io/',
        icon: 'fa-brands fa-codepen',
        color: '#888'
    },
    {
        name: 'Kaggle',
        description: 'Sometimes I work with data',
        url: 'kaggle.com/iam',
        icon: 'fa-brands fa-kaggle',
        color: '#008abc'
    },
    {
        name: 'GitLab',
        description: "GitHub's sister",
        url: 'gitlab.com/',
        icon: 'fa-brands fa-gitlab',
        color: '#e34c26'
    },
    {
        name: 'Behance',
        description: 'For design ideas',
        url: 'behance.net/',
        icon: 'fa-brands fa-behance',
        color: '#0057ff'
    }
];

displayLinks(links);
