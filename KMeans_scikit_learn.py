from sklearn.cluster import KMeans
import matplotlib.pyplot as plt
import numpy as np

x = np.array([[8,2],
               [9,7],
               [2,12],
               [9,1],
               [10,7],
               [3,14],
               [8,1],
               [1,13]])

clusters = 3
k_means = KMeans(n_clusters = clusters)
k_means.fit(x)
print(k_means.cluster_centers_)
plt.scatter(x[:,0],x[:,1], c = k_means.labels_, cmap='rainbow')
plt.show()