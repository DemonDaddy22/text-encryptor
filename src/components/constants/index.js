const descriptionValue = `Excepteur pariatur nulla in ulla
mco aliqua ea cupidatat incididunt proident culpa sint non exercitation deserunt dolor. 
Voluptate voluptate dolor reprehenderit laboris fugiat laboris consequat id ex ullamco ad duis elit. 
Irure do sint sint do veniam aliqua consequat est deserunt ullamco. 
Minim ut commodo exercitation deserunt sunt qui proident culpa ad ex tempor aliqua do irure. 
Et ullamco deserunt minim adipisicing et est dolor.
`;

const selectOptions = Object.freeze({
    '15_MIN' : { 'name': '15 Minutes', 'value': '15' }, //Value is in minutes
    '30_MIN' : { 'name': '30 Minutes', 'value': '30' },
    '1_HOUR' : { 'name': '1 Hour', 'value': '60' },
    '3_HOUR' : { 'name': '3 Hour', 'value': '180' },
    '6_HOUR' : { 'name': '6 Hour', 'value': '360' },
    '12_HOUR' : { 'name': '12 Hour', 'value': '720' },
    '1_DAY' : { 'name': '1 Day', 'value':  '1440' }
});

const severityOptions = Object.freeze({
    INFO: 1,
    WARNING: 2,
    ERROR: 3,
    SUCCESS: 4
});

export {
    descriptionValue,
    selectOptions,
    severityOptions
};