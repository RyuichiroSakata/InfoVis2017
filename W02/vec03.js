
Vec3 = function( x, y, z )
{
	this.x = x;
	this.y = y;
	this.z = z;
}

Vec3.prototype.min = function()
{
	if(this.x < this.y)
	{
		if(this.x < this.z)
		{
			return this.x;
		}
		else
		{
			return this.z;
		}
	}
	else if(this.y < this.z)
	{
		return this.y;
	}
	else
	{
		return this.z;
	}
}


Vec3.prototype.mid = function()
{
	if(this.x < this.y)
	{
		if(this.y < this.z)
		{
			return this.y;
		}
		else
		{
			if(this.x < this.z)
			{
				return this.z;
			}
			else
			{
				return this.x;
			}
		}
	}
	else if(this.y < this.z)
	{
		if(this.x < this.z)
			{
				return this.x;
			}
			else
			{
				return this.z;
			}
	}
	else
	{
		return this.y;
	}
}


Vec3.prototype.max = function()
{
	if(this.x > this.y)
	{
		if(this.x > this.z)
		{
			return this.x;
		}
		else
		{
			return this.z;
		}
	}
	else if(this.y > this.z)
	{
		return this.y;
	}
	else
	{
		return this.z;
	}
}


function AreaOfTriangle(v0, v1, v2){
	var va= new Vec3( v1.x-v0.x, v1.y-v0.y, v1.z-v0.z );
	var vb= new Vec3( v2.x-v0.x, v2.y-v0.y, v2.z-v0.z );
	var lva = Math.pow(va.x,2) + Math.pow(va.y,2) + Math.pow(va.z,2); // length of va(square)
	var lvb = Math.pow(vb.x,2) + Math.pow(vb.y,2) + Math.pow(vb.z,2); // length of vb(square)
	var i = va.x * vb.x + va.y * vb.y + va.z * vb.z; // dot product
	var S = Math.sqrt(lva * lvb - Math.pow(i,2))/2;
	return S;
}
