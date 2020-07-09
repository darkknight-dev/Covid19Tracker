window.addEventListener('load', () => {
    let api = "https://api.covid19api.com/summary";
    let table = document.getElementById("data");
    var table1 = document.getElementById("table1");
    const refresh = document.getElementById("refresh");
    const lastupdated = document.getElementById("last-updated");
    console.log(lastupdated);
    const countries = [];
    console.log(table1);
    var i = 0;

    initialize();
    function initialize() {
        fetch(api).then(response => {
            // console.log(response);
            return response.json();
        }).then(data => {
            countries.push(...data.Countries);
            console.log(countries);
            console.log(countries[1].Country);
            for (i = 0; i < countries.length; i++) {
                console.log(countries[i]);
            }

            var country = "Total";
            var row = table1.insertRow(2);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            cell1.innerHTML = country;
            cell2.innerHTML = data.Global.TotalConfirmed;
            cell3.innerHTML = data.Global.TotalDeaths;
            cell4.innerHTML = data.Global.TotalConfirmed;


            for (i = 0; i < countries.length; i++) {
                var country = countries[i];
                var row = table1.insertRow(2);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                cell1.innerHTML = country.Country;
                cell2.innerHTML = country.TotalConfirmed;
                cell3.innerHTML = country.TotalDeaths;
                cell4.innerHTML = country.TotalConfirmed;

            }
            lastupdated.innerHTML += "  " + country.Date;
        }
        );
    }
    // refresh.addEventListener('click', () => {
    //     table1.innerHTML = '';
    //     i = 0;
    //     initialize();
    //     console.log(table1);
    // })



});

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function refreshData() {
    window.location.reload();
}

const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;

const comparer = (idx, asc) => (a, b) => ((v1, v2) =>
    v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
)(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));

// do the work...
document.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
    const table = th.closest('table');
    Array.from(table.querySelectorAll('tr:nth-child(n+2)'))
        .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
        .forEach(tr => table.appendChild(tr));
})));




// const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;

// const comparer = (idx, asc) => (a, b) => ((v1, v2) =>
//     v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
// )(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));

// // console.log(v1);

// // do the work...
// document.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
//     const table = th.closest('table');
//     Array.from(table.querySelectorAll('tr:nth-child(n+2)'))
//         .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
//         .forEach(tr => {
//             table.appendChild(tr);
//             console.log(`${numberWithCommas(tr)}`);
//         });

// })));

// cell4.innerHTML = `${numberWithCommas(country.TotalConfirmed)} `;

// data1 = `
//             <td>${"Global"}</td>
//     <td>${data.Global.TotalConfirmed}</td>
//     <td>${data.Global.TotalDeaths}</td>
//     <td>${data.Global.TotalRecovered}</td>
//     <br>
//         `
//             console.log(table);
//             table.innerHTML = data1;

            //         data1 = `
            //         <td>${countries[0].Country}</td>
            // <td>${countries[0].TotalConfirmed}</td>
            // <td>${countries[0].TotalDeaths}</td>
            // <td>${countries[0].TotalRecovered}</td>
            // <br>
            //     `
            // console.log(table);
            // table.innerHTML = data1;
