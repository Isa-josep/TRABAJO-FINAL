#include<bits/stdc++.h>

using namespace std ;

#ifdef LOCAL 
#include "debug.h"
#else
#define  debug(...)
#endif

#define  fore(i,a,z) for(auto i = a ; i != z  ; i += (i < z ?  1 : -1 ))
#define  ll long long  
#define str  string  
#define  ull unsigned  long  long 
#define  endl '\n'


void parseSQL(str nombre ,str matricula,str bachillerato , str  grupo ){
	cout << "(\'" << nombre << "\'" << ",\'" << matricula << ",\'" << bachillerato << "\',"  << grupo << "\')," << endl ;
}

void parseJSON(str nombre ,str matricula,str bachillerato , str  grupo ){
	cout << "{ \n \"Nombre\" : \"" << nombre << "\"," <<endl; 
	cout << " \"Control\" : \"" << matricula << "\","<<endl;
	cout << "\"Bachillerato\" :\"" << bachillerato << "\"," <<endl; 
	cout <<  "\"Grupo\" :\"" << grupo << "\"\n}," << endl ; 

}



int main(){
    cin.tie(0)->sync_with_stdio(0) , cin.tie(0)  ;	
    string  name , tmp ;
    
    while(getline(cin ,tmp)){
    	getline(cin,name);
	    str matricula ; 
	    cin >> matricula ; 
	    str bh ;
	    getline(cin,tmp);
	    getline(cin,bh);
	    str group ; 
	    cin >> group ; 
    	parseSQL(name,matricula,bh,group);
    }




       
}