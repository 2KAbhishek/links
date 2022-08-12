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
    if (link.url.includes(':')) {
        return link.url;
    }
    let url = 'https://' + link.url + username;
    if (link.append) {
        url += link.append;
    }
    return url;
};

const displayLinks = function (links) {
    filterInput.classList.remove('hide');
    for (const link of links) {
        let listItem = document.createElement('li');
        console.log(link);
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


displayLinks(links);
