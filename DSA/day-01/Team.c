#include<stdio.h>
int main(){
    int n;
    scanf("%d",&n);
    int arr[n][3];
    for(int i=0;i<n;i++){
        for(int j=0;j<3;j++){
            scanf("%d",&arr[i][j]);
        }
    }

    int x=0,y=0,z=0;
    for(int i=0;i<n;i++){
        x += arr[i][0];
        y += arr[i][1];
        z += arr[i][2];
    }

    if(x==y && y==z && z==0){
        printf("YES");
    }
    else{
        printf("NO");
    }
}