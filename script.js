const username = '2KAbhishek';
const linkList = document.querySelector('.link-list');
const linksSection = document.querySelector('.links');
const filterInput = document.querySelector('.filter-links');

const buildIcon = (link) => {
    return `
        <span class='${link.icon}' style='color: ${link.color};'></span>
    `;
};

const buildUrl = (link) => {
    if (link.url.includes('http')) {
        return link.url;
    }
    if (link.url.includes('mailto')) {
        return link.url;
    }
    return 'https://' + link.url + username;
};

const displayLinks = (links) => {
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
filterInput.addEventListener('input', (e) => {
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
        description: '/home/2kabhishek',
        url: 'https://2kabhishek.github.io',
        icon: 'fa-brands fa-fort-awesome',
        color: '#1688f0'
    },
    {
        name: 'GitHub',
        description: 'My favourite place :)',
        url: 'github.com/',
        icon: 'fa-brands fa-github',
        color: '#24292e'
    },
    {
        name: 'YouTube',
        description: 'I make tooling videos for devs',
        url: 'youtube.com/c/',
        icon: 'fa-brands fa-youtube',
        color: '#ff0000'
    },
    {
        name: 'Twitter',
        description: 'Tech, rants, philosophy, memes',
        url: 'twitter.com/',
        icon: 'fa-brands fa-twitter',
        color: '#1da1f2'
    },
    {
        name: 'Blog',
        description: 'About things I build and learn',
        url: 'https://2kabhishek.github.io/blog',
        icon: 'fa-brands fa-blogger',
        color: '#f57c00'
    },
    {
        name: 'LinkedIn',
        description: 'Career updates and thoughts',
        url: 'linkedin.com/in/',
        icon: 'fa-brands fa-linkedin',
        color: '#0077B5'
    },
    {
        name: 'Mail',
        description: 'Want to talk? Write me a mail',
        url: 'mailto:iam2kabhishek@gmail.com',
        icon: 'fa-brands fa-telegram',
        color: '#1ed75f'
    },
    {
        name: 'Instagram',
        description: 'I like travelling and recording',
        url: 'https://instagram.com/iam2kabhishek',
        icon: 'fa-brands fa-instagram',
        color: '#e1306c'
    },
    {
        name: 'Dev',
        description: 'Where I connect with Devs',
        url: 'dev.to/',
        icon: 'fa-brands fa-dev',
        color: '#505050'
    },
    {
        name: 'Twitch',
        description: "I stream my side projects!",
        url: 'twitch.tv/',
        icon: 'fa-brands fa-twitch',
        color: '#6441a5'
    },
    {
        name: 'Vimeo',
        description: "For Hackathons and demos",
        url: 'vimeo.com/',
        icon: 'fa-brands fa-vimeo',
        color: '#1ab7ea'
    },
    {
        name: 'Reddit',
        description: 'Lurk mostly, sometimes I post',
        url: 'reddit.com/user/',
        icon: 'fa-brands fa-reddit',
        color: '#ff4500'
    },
    {
        name: 'Exercism',
        description: 'For learning new languages',
        url: 'hackerrank.com/',
        icon: 'fa-brands fa-font-awesome',
        color: '#231b53'
    },
    {
        name: 'HackerRank',
        description: 'For problem solving skills',
        url: 'hackerrank.com/',
        icon: 'fa-brands fa-hackerrank',
        color: '#1ba94c'
    },
    {
        name: 'Leetcode',
        description: 'More problem solving',
        url: 'hackerrank.com/',
        icon: 'fa-brands fa-black-tie',
        color: '#e08b32'
    },
    {
        name: 'freeCodeCamp',
        description: 'Where I started web dev',
        url: 'freecodecamp.org/',
        icon: 'fa-brands fa-free-code-camp',
        color: '#006400'
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
];

displayLinks(links);
