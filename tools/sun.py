# Independent NOAA solar-position implementation to check the app's math.
import math
def noaa(y,m,d,lat,lon,tz):
    # Julian day at 00:00 local
    a=(14-m)//12; yy=y+4800-a; mm=m+12*a-3
    jdn=d+(153*mm+2)//5+365*yy+yy//4-yy//100+yy//400-32045
    jd=jdn-0.5-tz/24.0
    def times(jd):
        n=jd-2451545.0+0.0008
        T=(jd-2451545.0)/36525.0
        L0=(280.46646+T*(36000.76983+T*0.0003032))%360
        M=357.52911+T*(35999.05029-0.0001537*T)
        e=0.016708634-T*(0.000042037+0.0000001267*T)
        C=(math.sin(math.radians(M))*(1.914602-T*(0.004817+0.000014*T))
           +math.sin(math.radians(2*M))*(0.019993-0.000101*T)
           +math.sin(math.radians(3*M))*0.000289)
        true_long=L0+C
        omega=125.04-1934.136*T
        app_long=true_long-0.00569-0.00478*math.sin(math.radians(omega))
        eps0=23+(26+((21.448-T*(46.815+T*(0.00059-T*0.001813))))/60)/60
        eps=eps0+0.00256*math.cos(math.radians(omega))
        decl=math.degrees(math.asin(math.sin(math.radians(eps))*math.sin(math.radians(app_long))))
        y_=math.tan(math.radians(eps/2))**2
        eqt=4*math.degrees(y_*math.sin(2*math.radians(L0))-2*e*math.sin(math.radians(M))
            +4*e*y_*math.sin(math.radians(M))*math.cos(2*math.radians(L0))
            -0.5*y_*y_*math.sin(4*math.radians(L0))-1.25*e*e*math.sin(2*math.radians(M)))
        return decl,eqt   # eqt in minutes
    decl,eqt=times(jd+0.5)
    noon=(720-4*lon-eqt)/1440+tz/24.0   # fraction of day, local
    def ha(ang):
        c=((math.cos(math.radians(ang))-math.sin(math.radians(lat))*math.sin(math.radians(decl)))
           /(math.cos(math.radians(lat))*math.cos(math.radians(decl))))
        return math.degrees(math.acos(max(-1,min(1,c))))
    def asr_ha(f):
        alt=math.degrees(math.atan(1.0/(f+math.tan(abs(math.radians(lat-math.radians(0)))*0+abs(math.radians(lat)-math.radians(decl))))))
        c=((math.sin(math.radians(alt))-math.sin(math.radians(lat))*math.sin(math.radians(decl)))
           /(math.cos(math.radians(lat))*math.cos(math.radians(decl))))
        return math.degrees(math.acos(max(-1,min(1,c))))
    fmt=lambda f:"%02d:%02d"%(int(f*24)%24,round((f*24%1)*60)%60)
    out={}
    out["fajr"]=fmt(noon-ha(90+18)/360)
    out["sunrise"]=fmt(noon-ha(90.833)/360)
    out["dhuhr"]=fmt(noon)
    out["asr"]=fmt(noon+asr_ha(1)/360)
    out["maghrib"]=fmt(noon+ha(90.833)/360)
    out["isha"]=fmt(noon+ha(90+17)/360)
    return out
LAT,LON,TZ=41.0958,28.7756,3
for (y,m,d) in [(2026,8,1),(2026,1,15),(2026,3,21),(2026,12,21),(2026,6,21)]:
    print(f"{y}-{m:02d}-{d:02d}", noaa(y,m,d,LAT,LON,TZ))
