const fs = require('fs');
const path = require('path');
const SAMELIST = []

// utils
String.prototype.kebabCaseNamed = function() {
    return this.replace(/([A-Z])/g,'-$1').toLowerCase();
}

function compare(a, b) {
    const collectMap = [];
    return traverse(a, b);

    function traverse(left, right) {
        if(!isArray(left) || !isArray(right)) {
            return;
        }
        left.forEach(element => {
            left = element;
            if(left.list) {
                traverse(left.list, right);
            }else if(left.path) {
                if(diff(left, right)) {
                    collectMap.push(left)
                }else {
                    SAMELIST.push(left)
                }
    
            } 
        });
        return collectMap;
    }
    
}
function diff(a,b) {
    const astr = JSON.stringify(a).kebabCaseNamed();
    const bstr = JSON.stringify(b).kebabCaseNamed();
    
    if(bstr.indexOf(astr) > -1) {
        return false;
    }
    return true;
}

function printout(tagName, data) {
    console.log(...arguments)
    writeInFile(`./dist/result-${tagName}.log`,data)
}

function isArray(arg) {
    return Object.prototype.toString.call(arg) === `[object Array]`
}

/**
 * @params {String} relative_path
 * @params {Object} data
 */
function writeInFile(relative_path, data) {
    // TODO
    const file = path.resolve(__dirname, relative_path);
    fs.writeFile(file, JSON.stringify(data), { encoding: 'utf8'}, err => {
        if(err) throw err;
        console.log('complete!')
    })
}

exports.main = function (left, right) {
    const left_exclude_info = compare(left, right);
    printout('left_exclude_info',left_exclude_info);

    const right_exclude_info = compare(right, left);
    printout('right_exclude_info',right_exclude_info);
    printout('same_include_info',SAMELIST);
    const info = {left: left_exclude_info, right: right_exclude_info}

    return info;
}