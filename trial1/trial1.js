
        function get(obj, path, defaultValue) {
            const pathArr = path.split('.');
            let current = obj;
            for (let i = 0; i < pathArr.length; i++) {
                if (current[pathArr[i]] === undefined) {
                    return defaultValue || undefined;
                }
                current = current[pathArr[i]];
            }
            return current;
        }