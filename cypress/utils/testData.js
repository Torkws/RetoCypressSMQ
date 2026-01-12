export const testDataUsersErr = [
    { username: 'invalid_user', password: 'secret_sauce', message: 'Epic sadface: Username and password do not match any user in this service' },
    { username: 'locked_out_user', password: 'secret_sauce', message: 'Epic sadface: Sorry, this user has been locked out.' },
    { username: 'aaaaaaaaa', password: 'secret_sauce', message: 'Epic sadface: Username and password do not match any user in this service' },
    { username: '', password: 'secret_sauce', message: 'Epic sadface: Username is required' },
    { username: 'standard_user', password: '', message: 'Epic sadface: Password is required' },
];
