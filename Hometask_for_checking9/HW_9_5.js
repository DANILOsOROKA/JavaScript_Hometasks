/*Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись 
значення окремих властивостей, для властивості modules зробити список з елементами
Приклад структури знаходиться у файлі example.png, який лежить в папці з поточним файлом*/

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

for (let i = 0; i < coursesArray.length; i++){
            let div = document.createElement('div')
            div.className = 'course'

            let div_2 = document.createElement('div')
            div_2.className = 'title'
            div_2.innerText = coursesArray[i].title

            let div_3 = document.createElement('div')
            div_3.className = 'monthDuration'
            div_3.innerText = `Mounth duration -  ${coursesArray[i].monthDuration}`

            let div_4 = document.createElement('div')
            div_4.className = 'hourDuration'
            div_4.innerText = `Hour duration -  ${coursesArray[i].hourDuration}`

            let div_5 = document.createElement('div')
            div_5.className = 'modules'

            let div_6 = document.createElement('div')
            div_6.className = 'HTML'
            div_6.innerText = coursesArray[i].modules[0]

            let div_7 = document.createElement('div')
            div_7.className = 'CSS'
            div_7.innerText = coursesArray[i].modules[1]

            let div_8 = document.createElement('div')
            div_8.className = 'JS'
            div_8.innerText = coursesArray[i].modules[2]

            let div_9 = document.createElement('div')
            div_9.className = 'Durations'

            let ul = document.createElement('ul');
            ul.className = 'menu'
            for (let j = 3; j < coursesArray[i].modules.length; j++){
                let li = document.createElement('li')
                ul.appendChild(li);
                li.innerText = coursesArray[i].modules[j]
            }
            div_9.append(div_3, div_4)
            div.append(div_2, div_9, div_5)
            div_5.append(div_6, div_7, div_8, ul)
            document.body.appendChild(div);
        }