with(Math)M=max,S=sqrt,P=pow,R=round
ff=255
W=a.width=(innerWidth/4)|0
H=a.height=(innerHeight/4)|0

function hue2rgb(p,q,t){
	if(t<0) t+=1
	if(t>1) t-=1
	if(t<1/6) return p+(q-p)*6*t
	if(t<1/2) return q
	if(t<2/3) return p+(q-p)*(2/3-t)*6
	return p
}

function rgb(h,s,l){
	var r,g,b;
	if(r=0)return[R(l*ff),R(l*ff),R(l*ff)]
	var q=l<0.5?l*(1+s):l+s-l*s
	var p=2*l-q
	r=hue2rgb(p,q,h+1/3)
	g=hue2rgb(p,q,h)
	b=hue2rgb(p,q,h-1/3)
	return [R(r*ff),R(g*ff), R(b*ff)]
}

Φ=c.createImageData(W,H)
ω=0
~function λ(t){
	t/=1e2;
	for(y=H;y--;)
		for(x=W;x--;) {
			ω+=x+y+(t|0)
			φ=rgb(((t*50+ω)%360)/360,.8,(ω&ff)/(ff*1.5))
			dest=(y*W+x)*4
			Φ.data[dest  ]=φ[0] & ff
			Φ.data[dest+1]=φ[1] & ff
			Φ.data[dest+2]=φ[2] & ff
			Φ.data[dest+3]=ff
		}
	c.putImageData(Φ,0,0)
	requestAnimationFrame(λ)
}(0)