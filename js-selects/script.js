const citiesData = [
    {id: 'mos77', name: 'Москва'},
    {id: 'spb78', name: 'Санкт-Петербург'},
    {id: 'eka66', name: 'Екатеринбург'}
];

const departmentsData = [
    { city_id: "mos77", id:"ABC123", dep_name: "ABC123" },
    { city_id: "mos77", id:"DEF456", dep_name: "DEF456" },
    { city_id: "mos77", id:"GHI789", dep_name: "GHI789" },
    { city_id: "spb78", id:"JKL101", dep_name: "JKL101" },
    { city_id: "spb78", id:"MNO202", dep_name: "MNO202" },
    { city_id: "spb78", id:"PQR303", dep_name: "PQR303" },
    { city_id: "eka66", id:"STU404", dep_name: "STU404" },
    { city_id: "eka66", id:"VWX505", dep_name: "VWX505" },
    { city_id: "eka66", id:"YZA606", dep_name: "YZA606" }
]

const employeesData = [
    { dep_id: "ABC123", id: "SMI123", employee_name: "Смирнов А.В." },
    { dep_id: "ABC123", id: "PET456", employee_name: "Петров И.И." },
    { dep_id: "ABC123", id: "IVA789", employee_name: "Иванов С.С." },
    
    { dep_id: "DEF456", id: "KUZ101", employee_name: "Кузнецов А.П." },
    { dep_id: "DEF456", id: "SAV202", employee_name: "Савельев Д.А." },
    { dep_id: "DEF456", id: "KRY303", employee_name: "Крылов О.Н." },
    
    { dep_id: "GHI789", id: "LIT404", employee_name: "Литвинов Р.М." },
    { dep_id: "GHI789", id: "ZAY505", employee_name: "Зайцев И.В." },
    { dep_id: "GHI789", id: "NOV606", employee_name: "Новиков К.О." },
    
    { dep_id: "JKL101", id: "TRO707", employee_name: "Трофимов Н.Г." },
    { dep_id: "JKL101", id: "VAS808", employee_name: "Васильев А.С." },
    { dep_id: "JKL101", id: "GOR909", employee_name: "Гордеев И.П." },
    
    { dep_id: "MNO202", id: "PEL010", employee_name: "Пелевин С.К." },
    { dep_id: "MNO202", id: "SER111", employee_name: "Сергеев В.И." },
    { dep_id: "MNO202", id: "ESH222", employee_name: "Ешев А.Н." },
    
    { dep_id: "PQR303", id: "TUL333", employee_name: "Тулупов Ф.Р." },
    { dep_id: "PQR303", id: "CLI444", employee_name: "Клименко Е.Н." },
    { dep_id: "PQR303", id: "RAL555", employee_name: "Ралдугин В.И." },
    
    { dep_id: "STU404", id: "MAS666", employee_name: "Масленников А.Д." },
    { dep_id: "STU404", id: "KHA777", employee_name: "Харитонов Г.С." },
    { dep_id: "STU404", id: "FOM888", employee_name: "Фомин Р.М." },
    
    { dep_id: "VWX505", id: "ZEF999", employee_name: "Зефиров К.И." },
    { dep_id: "VWX505", id: "NEG000", employee_name: "Негин В.П." },
    { dep_id: "VWX505", id: "BUL111", employee_name: "Булатов Г.В." },
    
    { dep_id: "YZA606", id: "KIM222", employee_name: "Кимов Р.С." },
    { dep_id: "YZA606", id: "CHE333", employee_name: "Чернов И.Н." },
    { dep_id: "YZA606", id: "BLO444", employee_name: "Блохин А.Е." }
]

const factoryTeamData = [
    {id: "ft01", type: "Специализированная"},
    {id: "ft02", type: "Комплексная"}
]

const workShiftData = [
    {id: "wsh01", shift_type: "Дневная"},
    {id: "wsh02", shift_type: "Ночная"}
]



window.onload = function (){
    const citySelect = document.getElementById('city');
    const departmentSelect = document.getElementById('department');
    const employeeSelect = document.getElementById('employee');
    const teamSelect = document.getElementById('team');
    const shiftSelect = document.getElementById('shift');

    departmentSelect.disabled = true;
    employeeSelect.disabled = true;

    citiesData.forEach(city => {
        citySelect.appendChild(createOption(city.id, city.name));
    });

    factoryTeamData.forEach(team => {
        teamSelect.appendChild(createOption(team.id, team.type));
    });

    workShiftData.forEach(shift => {
        shiftSelect.appendChild(createOption(shift.id, shift.shift_type));
    });

    citySelect.addEventListener("change", function (event) {
        departmentSelect.disabled = false;
        console.log(event.target.value)
        departmentsData.forEach((dep) => {           
            departmentSelect.innerHTML = "";
            departmentSelect.append(createOption("", "Цех"));
            departmentsData.forEach((dep) => {
                if (dep.city_id == event.target.value){
                    departmentSelect.append(createOption(dep.id, dep.dep_name));
                }
            });         
        });
    });

    citySelect.addEventListener("change", function (event) {
        departmentSelect.disabled = false;
        departmentsData.forEach((dep) => {           
            departmentSelect.innerHTML = "";
            departmentSelect.append(createOption("", "Цех"));
            employeeSelect.innerHTML = "";
            employeeSelect.append(createOption("", "Сотрудник"));
            employeeSelect.disabled = true;
            departmentsData.forEach((dep) => {
                if (dep.city_id == event.target.value){
                    departmentSelect.append(createOption(dep.id, dep.dep_name));
                }
            });         
        });
    });

    departmentSelect.addEventListener("change", function (event) {
        employeeSelect.disabled = false;
        employeesData.forEach((employee) => {           
            employeeSelect.innerHTML = "";
            employeeSelect.append(createOption("", "Сотрудник"));
            employeesData.forEach((employee) => {
                if (employee.dep_id == event.target.value){
                    employeeSelect.append(createOption(employee.id, employee.employee_name));
                }
            });         
        });
    });

    let obj = {};

    const saveBtn = document.querySelector('.btn-save');

    saveBtn.addEventListener("click", function (event) {
        event.preventDefault();
        obj.city = citySelect.value;
        obj.department = departmentSelect.value;
        obj.employee = employeeSelect.value;
        obj.factoryTeam = teamSelect.value;
        obj.workShift = shiftSelect.value;

        saveCookie('select_values', obj);
    })
}

function saveCookie(name, value) {
    document.cookie = name + '=' + JSON.stringify(value);
}

function createOption(value, text) {
    const newOptionEl = document.createElement("option");
    newOptionEl.value = value;
    newOptionEl.text = text;
    return newOptionEl;
}


