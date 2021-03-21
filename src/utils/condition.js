export function condition(condition){
    switch(condition){
        case 'storm':
            return icon = {
                name: 'rainy-outline',
                color: '#1ec9ff'
            }
        case 'clear_day':
            return icon = {
                name: 'partly-sunny-outline',
                color: '#FFB300'
            }
        case 'rain':
            return icon = {
                name: 'rainy-outline',
                color: '#1ec9ff'
            }
        default :
            return icon = {
                name: 'cloud-outline',
                color: '#1ec9ff'
            }
    }
}